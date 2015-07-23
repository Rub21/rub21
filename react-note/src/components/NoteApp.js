'use strict';

var React = require('react');
var NoteListBox = require('./NoteListBox');
var NoteCreateBox = require('./NoteCreateBox');
var Upload = require('./Upload');

var NoteApp = React.createClass({

	getInitialState: function() {
		return {
			id: null
		}
	},
	onEdit : function(id){
		this.setState({currentlyEdited:id})

	},
	onAdd : function(){
		this.setState({currentlyEdited:null}) //si se esta agregando un nueva nota esto sera null sin id
	},

	render: function() {
        return (
            <div className="container">
                <div className="row header">
                    <div className="page-header">
                        <h1>React Note App</h1>
                    </div>
                </div>
                <div className="row">

                    <Upload/>
                </div>
            </div>
        )
    }
    // id={this.state.currentlyEdited}

});

//                    <NoteListBox onEdit={this.onEdit} onAdd={this.onAdd}/>
    //                <NoteCreateBox id={this.state.id} />
module.exports= NoteApp;