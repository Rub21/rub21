'use strict';
var React = require('react');
var $ = require('jquery');

var FormUpload = React.createClass({
    getInitialState: function() {
        return {
            startupload: false,
            status: false,
            csvheaders: null
        };
    },
    uploadFile: function(e) {
        var self = this;
        var formData = new FormData();
        formData.append('file', this.refs.file.getDOMNode().files[0]);
        var name = this.refs.taskname.getDOMNode().value.trim();
        var password = this.refs.password.getDOMNode().value.trim();
        formData.append('name', name);
        formData.append('password', password);
        $.ajax({
            url: 'http://localhost:8000/csv',
            data: formData,
            processData: false,
            contentType: false,
            type: 'POST',
            success: function(data) {
                self.setState({
                    startupload: true,
                    status: true
                });
                self.cleanup();
            },
            error: function(xhr, status, err) {
                self.setState({
                    startupload: true,
                    status: false
                });
                self.cleanup();
            }
        });

        e.preventDefault()
    },
    handleFiles: function() {
        var reader = new FileReader();
        reader.onload = this.loadHandler;
        reader.onerror = this.errorHandler;
        reader.readAsText(this.refs.file.getDOMNode().files[0]);
    },
    loadHandler: function(event) {
        var csv = event.target.result;
        this.setState({csvheaders:csv.split("\n")[0]});
 
    },
    errorHandler: function(event) {
        if (evt.target.error.name == "NotReadableError") {
           this.setState({csvheaders:"Canno't read file !"});
        }
    },
    cleanup: function() {
        var self = this;
        setTimeout(function() {
            self.setState({
                startupload: false,
                status: false
            });
        }, 3000);
    },
    render: function() {
        return (
            <div>
              <form ref="uploadForm" className="uploader" encType="multipart/form-data" >
                <label>Task name</label>
                <input className='col12 block clean' ref='taskname' type='text' name='name' placeholder='Task name' />
                <label>Password</label>
                <input className='col12 block clean' ref='password' type='password' name='uploadPassword' placeholder='Password'  value="mapbox"/>
                <input ref="file" type="file" name="file" className="upload-file" onChange={this.handleFiles}/>
                <input type="button" ref="button" value="Upload" onClick={this.uploadFile} />
                <div id="output">{this.state.csvheaders}</div>
              </form>
              <div>{(this.state.startupload) ?
              ((this.state.status) ? (<h1>succesful upload </h1>) : (<h1>unsuccefull</h1>)) : ''}</div>
            </div>
        );
    }
});

module.exports = FormUpload;
