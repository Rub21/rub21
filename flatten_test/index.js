var flatten = require('geojson-flatten'),
    fs = require('fs');

function f(_) {
    return JSON.parse(fs.readFileSync(_, 'utf8'));
}

var result = flatten(f('./uk.geojson'));

fs.appendFile('geo2.geojson', JSON.stringify(result));