var fs = require('fs');
var csv = require('csv-parser')
var _ = require('underscore');
var text = "";
var rqt = fs.createReadStream("combined-intersect.csv")
	.pipe(csv())
	.on('data', function(data) {

		if (data.geom.indexOf("MULTIPOINT") === -1) {
			//point
			text = text + data.way_id + ',' + data.geom + '\n';
		} else {
			//multipoint
			var p = data.geom.replace("MULTIPOINT ((", " (").replace("))", ")");
			var points = p.split(",");
			_.each(points, function(val, key) {
				text = text + data.way_id + ',POINT' + val + '\n';
			});
		}
	});

rqt.on('finish', function() {
	fs.writeFile("processed.csv", "way_id,geom\n" + text.toString(), function(err) {});
});