// Generated by CoffeeScript 1.9.0
var argv, connectCrossingSegments, fs, geo, la, path, proj, sidewalksLatLonFile;

argv = require('yargs').argv;

path = require('path');

fs = require('fs');

proj = require('proj4js');

geo = require('geodesy');

la = require('look-alike');

sidewalksLatLonFile = argv["in"];

connectCrossingSegments = function(sidewalksPath) {
  var sidewalks;
  sidewalks = fs.readFileSync(sidewalksPath);
  sidewalks = JSON.parse(sidewalks);
  return console.log(sidewalks);
};

connectCrossingSegments(sidewalksLatLonFile);
