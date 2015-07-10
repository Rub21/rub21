'use strict';
var React = require('react');
var $ = require('jquery');
var FormUpload = React.createClass({
    uploadFile: function(e) {
        var formData = new FormData();
        formData.append('file', this.refs.file.getDOMNode().files[0]);
        formData.append('name', 'name');
        formData.append('password', 'mapbox');
        $.ajax({
            url: 'http://localhost:8000/csv',
            data: formData,
            processData: false,
            contentType: false,
            type: 'POST',
            success: function(data) {
                alert(data);
            }
        });
        e.preventDefault()
    },
    checkoutFile: function() {
        var reader = new FileReader();
        reader.onload = function(e) {
            var text = reader.result;
            console.log(text);
        }
        var file = this.refs.file.getDOMNode().files[0];
        console.log(file)
        reader.readAsDataURL(file);

    },
    render: function() {
        return (
        <div>                
         <form ref="uploadForm"  onSubmit={this.uploadFile} className="uploader" encType="multipart/form-data" >
            <input ref="file" type="file" name="file" className="upload-file"/>
            <button type="button" onClick={this.checkoutFile}>Chose the file< /button>

        </form>                
      </div>
        );
    }
});

module.exports = FormUpload;