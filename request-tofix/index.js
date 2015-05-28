var request = require('request');


request.get('http://osmlab.github.io/to-fix/src/data/tasks.json', {
	json: {
		key: 'value'
	}
}, function(error, response, body) {
	if (!error && response.statusCode == 200) {
		for (var i = 0; i < body.tasks.length; i++) {

		post("http://54.147.184.23:8000/task/" + body.tasks[i].id, body.tasks[i].title);
		//post("http://54.87.93.140:8000/task/" + body.tasks[i].id, body.tasks[i].title);
		//post("http://54.87.93.140:8000/task/specialco", "specialco");
		};

	} else {
		console.log("ERROR");
	}

});

function post(url, title) {
	request.post(
		url, {
			json: {
				key: 'value'
			}
		},
		function(error, response, body) {
			if (!error && response.statusCode == 200) {

				console.log("========="+ title + "=========");
				console.log(body);
			} else {
				console.log("ERROR");
			}
		}
	);
}


