var pg = require('pg');
var _ = require('underscore');
var parser = require('xml2json');
var request = require('request');
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

var options = {
	object: true,
	reversible: false,
	coerce: true,
	sanitize: true,
	trim: true,
	arrayNotation: false
};

var highway = ['footway', 'path', 'track', 'cycleway', 'bridleway', 'steps'];
setTimeout(function() {
	var query = 'SELECT key, value, "time"  FROM highwayhighway WHERE "time" = 0 limit 50;';
	var cliente = client.query(query, function(err, results) {
		results.rows.forEach(function(row) {
			var item = JSON.parse(row.value.split('|').join('"'));
			//var url = 'http://overpass-api.de/api/interpreter?data=way(' + item.object_id + ');out;';
			var url = 'http://overpass.osm.rambler.ru/cgi/interpreter?data=way(' + item.object_id + ');out;';
			//var url = 'http://www.openstreetmap.org/api/0.6/way/'+ item.object_id + '/history';
			console.log(url)
			request(url, function(error, response, body) {
				if (!error && response.statusCode == 200) {
					var json = parser.toJson(body, options);
					console.log(i++);
					if (!_.isUndefined(json.osm.way)) {
						_.map(json.osm.way.tag, function(obj) {
							if (obj.k === 'highway' && _.indexOf(highway, obj.v) >= 0) {
								console.log(obj.v);
								var q = 'UPDATE highwayhighway SET "time"= 2147483646 WHERE key = \'' + row.key + '\';\n';
								fs.appendFile('query.sql', q, function(err) {});
							}
						});
					}
				} else {
					console.log(error)
				}
			});
		});
	});
}, 3000);