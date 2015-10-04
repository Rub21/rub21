var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var PORT = 3000;


app.get('/', function(req, res) {

	res.sendFile(__dirname + '/index.html');

});

io.on('connection', function(socket) {
	console.log(socket.id);
	//io.emit() llega a todos los usuarios incluyendo a nosostros

	var channel = "channel-a"; //cannal por defecto

	socket.broadcast.emit('message', 'El usuario ' + socket.id + ' se ha conectado : ', 'System'); //

	socket.join(channel);

	socket.on('message', function(msj) {
		//io.emit('message', msj, socket.id); // emite a todos
		io.sockets.in(channel).emit("message",msj,socket.id);//envia al cannal
		//socket.broadcast.to(channel).emit("message",msj,socket.id); //envia a todos menos a mi


	});

	socket.on('disconnect', function(e) {
		socket.emit('message', socket.id);

	});

	//cambiamos de canal

	socket.on("change_channel", function(newChannel) {
		socket.leave(channel);
		socket.join(newChannel);
		channel= newChannel;
		socket.emit('change_channel',newChannel)

	});

});


http.listen(PORT, function() {
	console.log('Puerto:' + PORT);
	// body...
})