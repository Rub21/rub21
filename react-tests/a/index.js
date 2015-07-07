// - CommentBox
//   - CommentList
//     - Comment
//   - CommentForm

var CommentBox = React.createClass({
    loadCommentsFromServer: function() {
    $.ajax({
      url: this.props.url_read,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url_read, status, err.toString());
      }.bind(this)
    });
  },
    handleCommentSubmit: function(comment) {
   var comments = this.state.data;
    var newComments = comments.concat([comment]);
    this.setState({data: newComments});

     $.ajax({
      url: this.props.url_write,
      dataType: 'json',
      type: 'POST',
      data: comment,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url_write, status, err.toString());
      }.bind(this)
    });
  },
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  },
  render: function() {
    return 	<div className="commentBox">
				<h1>Comments</h1>
				 <CommentList data={this.state.data} />
				<CommentForm onCommentSubmit={this.handleCommentSubmit} />
			</div>;
  }
});

//===========================================================================

var CommentList = React.createClass({
  render: function() {
    var commentNodes = this.props.data.map(function (comment) {
      return (
        <Comment author={comment.author} number={comment.number}>
          {comment.text}
        </Comment>
      );
    });
    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
});

var Comment = React.createClass({

  render: function() {
  	var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
  	var url_img="http://veekun.com/dex/media/pokemon/dream-world/"+this.props.number+".svg";
    return (
      <div className="comment">
      <img src={url_img}  width="60"/>
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
         <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
      </div>
    );
  }
});

//===========================================================================


var CommentForm = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var author = React.findDOMNode(this.refs.author).value.trim();
    var text = React.findDOMNode(this.refs.text).value.trim();
    var number = React.findDOMNode(this.refs.number).value.trim();    
    if (!text || !author || !number) {
      return;
    }
    this.props.onCommentSubmit({author: author, text: text,number:number});
    React.findDOMNode(this.refs.author).value = '';
    React.findDOMNode(this.refs.text).value = '';
    return;
  },
  render: function() {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit}>      
        <input type="text" placeholder="Your name" ref="author" />
        <input type="text" placeholder="Say something..." ref="text" />
        <input type="text" placeholder="number < 700" ref="number" />
        <input type="submit" value="Post" />
      </form>
    );
  }
});




React.render(
  <CommentBox url_read="http://localhost:3001/read" url_write="http://localhost:3001/write" pollInterval={2000}/>,
  document.getElementById('content')
);
