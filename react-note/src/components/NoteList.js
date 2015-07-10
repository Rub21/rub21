'use strict';

var React = require('react');
var Note = require('./Note');

var NoteList = React.createClass({
	getInitialState:function () {
		return {activeNoteId:null}
	},
	setActiveNote: function(id){
		this.setState({activeNoteId:id});

	},
	render:function(){
		var self = this;
		var notes = this.props.notes.concat().reverse();
		var noteNodes = notes.map(function(note){
			return (
                <Note key={note._id} active={self.state.activeNoteId === note._id} note={note} onEdit={self.props.onEdit} onSelect={self.setActiveNote}/>
            );
		});
		//onEdit={self.props.onEdit} esta escuchado desde Note y pasa el evento a NotelistBox
		//onSelect={self.setActiveNote} esta escuchado desde Note  y activa  la selecion  y actializa el estado 
		 return (
            <div className="list-group">
                {noteNodes}
            </div>
         );
	}
});

module.exports= NoteList;