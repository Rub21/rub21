var pg = require('pg');

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
var query = 'SELECT key, value, "time"  FROM highwayriverbank WHERE "time" = 0 limit 10;';


setTimeout(function() {
	var cliente = client.query(query, function(err, results) {
		results.rows.forEach(function(row) {
			var item = JSON.parse(row.value.split('|').join('"'));
			console.log(item);
		});
	});
}, 3000);