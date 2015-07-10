'use strict';

var React = require('react');
var NoteStore = require('../stores/NoteStore');

var TextArea = React.createClass({

      getInitialState: function() {
        return {
          noteText: ''
        }
      },

      handleChange: function() {
        this.setState({
          noteText: event.target.value
        })
      },
      handleSave: function() {

        this.props.onSave(this.state.noteText, this.props.id); //esto envia unrespuesta a NotecreationBox=  onSave es una parametro de 
        if (!this.props.id) { //this.props.id viene de NotecreationBox
          this.refs.textArea.getDOMNode().value = '';
          this.setState({
            noteText: ''
          });
        }

      },

      componentWillReceiveProps: function() {

          this.setState({
            noteText: nexProps.noteText
          });
          if (!nextProps.id) {
            this.refs.textArea.getDOMNode().focus();
          }
        },
    render: function() {
        return (
            <div>
                <textarea className="form-control" ref="textArea" cols="100" rows="20" value={this.state.noteText} onChange={this.handleChange}></textarea><br/>
                <input type="button" className="btn btn-success btn-lg" value="Save" onClick={this.handleSave}/>
            </div>
        )
    }
});

module.exports=TextArea;