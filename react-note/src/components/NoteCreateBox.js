'use strict';

var React = require('react');
var TextArea = require('./TextArea');
var NoteActions = require('../actions/NoteActions');
var NoteStore = require('../stores/NoteStore');

var NoteCreateBox = React.createClass({

	handleSave : function (noteText,id) {
		if(id){
			NoteActions.editNote({_id: id, text: noteText});

		}
		else {
			NoteActions.createNote({_id:Date.now(),text:noteText});
		}
		
	},
	render : function(){
		var note;
		if(this.props.id){ //this.props.id viene de Note app
			note=NoteStore.getNote(this.props.id);
		}

		return (
            <div className="col-md-8">
                <TextArea onSave={this.handleSave} id={this.props.id} noteText={note ? note.text : ''} />
            </div>
        )
	}

});

module.exports=NoteCreateBox;