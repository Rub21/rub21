var pg = require('pg');
var _ = require('underscore');
var parser = require('xml2json');
var request = require('request');
var fs = require('fs');
var crontab = require('node-crontab');

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


var options = {
	object: true,
	reversible: false,
	coerce: true,
	sanitize: true,
	trim: true,
	arrayNotation: false
};

var highway = ['footway', 'path', 'track', 'cycleway', 'bridleway', 'steps'];
var nums = [100000, 200000, 300000, 400000, 500000, 600000, 700000, 800000, 900000, 1000000, 1100000, 1200000, 1300000, 1400000, 1435887];
var count = 1;
function init(limit, offset) {
	var i = 0;
	var query = 'SELECT key, value, "time"  FROM highwayhighway WHERE "time" = 0 limit 100000 offset ' + offset + ';';
	console.log(query);
	var cliente = client.query(query, function(err, results) {
		results.rows.forEach(function(row) {
			var item = JSON.parse(row.value.split('|').join('"'));
			//var url = 'http://overpass-api.de/api/interpreter?data=way(' + item.object_id + ');out;';
			//var url = 'http://overpass.osm.rambler.ru/cgi/interpreter?data=way(' + item.object_id + ');out;';
			var url = 'http://www.openstreetmap.org/api/0.6/way/' + item.object_id + '/history';
			request(url, function(error, response, body) {
				if (!error && response.statusCode == 200) {
					var json = parser.toJson(body, options);
					console.log(i++);
					if (!_.isUndefined(json.osm.way)) {
						_.map(json.osm.way.tag, function(obj) {
							if (obj.k === 'highway' && _.indexOf(highway, obj.v) >= 0) {
								console.log(obj.v);
								var q = 'DELETE FROM highwayhighway WHERE key = \'' + row.key + '\';\n';
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
}

setTimeout(function() {
	init(nums[count + 1], nums[count]);
	count++;
	
	crontab.scheduleJob("0 0 */3 * * ", function() {
		if (count < 14) {
			init(nums[count + 1], nums[count]);
			count++;
		} else {
			console.log("Done!")
		}
	});
}, 3000);