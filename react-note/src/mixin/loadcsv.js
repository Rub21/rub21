module.exports = {

	getAsText: function(fileToRead) {
		var text = '';
		var reader = new FileReader();
		// Handle errors load
		reader.onload = loadHandler;
		reader.onerror = errorHandler;

		// Read file into memory as UTF-8      
		reader.readAsText(fileToRead);

		function loadHandler(event) {
			var csv = event.target.result;
			console.log(csv.split("\n")[0]);
			text = csv.split("\n")[0];
		};

		function errorHandler(evt) {
			if (evt.target.error.name == "NotReadableError") {
				text = "Canno't read file !";
			}
		}

		reader.onload = function(e) {
			console.log(reader.result)
			var text = reader.result;
		}

	console.log(reader)
	}
}