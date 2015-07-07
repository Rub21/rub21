var request = require('request');
var request_json = require('request-json');

request.get('http://osmlab.github.io/to-fix/src/data/tasks.json', {
	json: {
		key: 'value'
	}
}, function(error, response, body) {
	if (!error && response.statusCode == 200) {
		for (var i = 0; i < body.tasks.length; i++) {
			post("http://54.165.131.155:8000/task/" + body.tasks[i].id, body.tasks[i].title);
		};
	} else {
		console.log("ERROR");
	}

});

function post(url, title) {
	// request.post(
	// 	url, {
	// 		json: {
	// 			key: 'value'
	// 		}
	// 	},
	// 	function(error, response, body) {
	// 		console.log("=========" + title + "=========");
	// 		console.log('response.statusCode : ' + response.statusCode)
	// 		if (!error && response.statusCode == 200) {

	// 			console.log(body);
	// 		} else {
	// 			console.log("ERROR");
	// 		}
	// 	}
	// );
	var client = request_json.createClient('http://localhost:8888/');
	client.post(url, null, function(err, res, body) {
		console.log("=========" + title + "=========");
		console.log('response.statusCode : ' + res.statusCode)
		console.log(body);		
	});

}