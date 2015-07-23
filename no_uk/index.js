var pg = require('pg');
var _ = require('underscore');
var argv = require('minimist')(process.argv.slice(2));
var jsonfile = require('jsonfile');
var fs = require('fs');
var user = process.env.DBUsername || 'postgres';
var password = process.env.DBPassword || '';
var address = process.env.DBAddress || 'localhost';
var database = process.env.Database || 'tofix';
var client;
var conString = 'postgres://' +
	user + ':' +
	password + '@' +
	address + '/' +
	database;

pg.connect(conString, function(err, c, d) {
	if (err) return console.log(err);
	console.log('connected to:', address);
	client = c;
});
var i = 0;
setTimeout(function() {
	jsonfile.readFile(argv.file, function(err, obj) {
		var query = 'SELECT key, value, "time"  FROM highwayhighway WHERE "time" = 0;';
		var cliente = client.query(query, function(err, results) {
			console.log(" Filas: " + results.rows.length)
			results.rows.forEach(function(row) {
				var item = JSON.parse(row.value.split('|').join('"'))
				var coor = item.st_astext.replace('POINT(', '').replace(')', '').split(' ').reverse();
				console.log(i++);
				if (pointinpolygon(coor, obj.features[0].geometry.coordinates[0])) {
					var q = 'UPDATE highwayhighway SET "time"= 2147483646 WHERE key = \'' + row.key + '\';\n';
					fs.appendFile('query.sql', q, function(err) {});
				}
			});
		});

	});
}, 3000);

function pointinpolygon(point, vs) {
	var x = point[0],
		y = point[1];
	var inside = false;
	for (var i = 0, j = vs.length - 1; i < vs.length; j = i++) {
		var xi = vs[i][0],
			yi = vs[i][1];
		var xj = vs[j][0],
			yj = vs[j][1];
		var intersect = ((yi > y) != (yj > y)) && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
		if (intersect) inside = !inside;
	}
	return inside;
}