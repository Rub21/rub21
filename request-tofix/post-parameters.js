var request = require('request');

request.post({
	url: 'http://54.147.184.23:8000/task/unconnectedmajor',
	form: {
		user: "Rub21",
		action: "edit"
	}
}, function(error, response, body) {
	console.log(body);
});

//Make a edit

// request.post({
// 	url: 'http://54.147.184.23:8000/track/unconnectedmajor',{
// 		"attributes": {
// 			"user": "Aaron Lidman",
// 			"action": "edit",
// 			"key": "82bb94cfd25d0a8976de2f37fcb32e6c",
// 			"editor": "josm"
// 		}
// 	}

// }, function(error, response, body) {
// 	console.log(body);
// });


// request({
//     url: "http://54.147.184.23:8000/track/unconnectedmajor",
//     method: "POST",
//     json: true,   // <--Very important!!!
//     body: {
// 		"attributes": {
// 			"user": "Rub21",
// 			"action": "edit",
// 			"key": "82bb94cfd25d0a8976de2f37fcb32e6c",
// 			"editor": "josm"
// 		}
// 	}

// }, function (error, response, body){
//     console.log(response);
// });