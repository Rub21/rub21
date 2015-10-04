var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var PORT = 3000;


app.get('/', function(req, res) {

	res.sendFile(__dirname + '/index.html');

});

io.on('connection', function(socket) {
	console.log(socket.id);

});


http.listen(PORT, function() {
	console.log('Puerto:' + PORT);
	// body...
})