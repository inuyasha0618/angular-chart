var mongoose = require('mongoose');
var datasetSchema = new mongoose.Schema({
	label: String,
	fillColor : String,
	strokeColor : String,
	pointColor : String,
	pointStrokeColor : String,
	data : Array
});

var datasetModel = mongoose.model('datasetModel',datasetSchema);
module.exports = datasetModel;


