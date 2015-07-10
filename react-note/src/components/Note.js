'use strict';

var React = require('react');

var Note = React.createClass({

    handleEdit:function(id,event){
        event.preventDefault();
        this.props.onEdit(id); // Esto pasa al NoteList con con el id
        this.props.onSelect(id); //Esto pasa al Notelist con el Id
    },

    render: function() {

        var note=this.props.note;

        var title=note.text.length >= 20 ? note.text.substring(0,20) : note.text;

        var className = this.props.active ? 'active' : null;

        return ( //.bind(null,note._id) para generar tipos de eventos en este caso no pasaremos un evento null
            <a href="#" className={'list-group-item '+className} onClick={this.handleEdit.bind(null,note._id)}>{title}</a>
        )
    }
});

module.exports=Note;