var express = require("express"),
methodOverride = require("method-override"),
bodyParser = require("body-parser"),
app = express(),
port = parseInt(process.env.PORT, 10) || 8080,
mongoose = require('mongoose'),
datasetModel = require('./model/model.js'),
dbURI = 'mongodb://localhost/angular-chart';

app.use(methodOverride()); 
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json()) 
app.use(express.static(__dirname + '/app')); 

mongoose.connection.on("connected",function(){
	console.log('mongoose connects to ' + dbURI + ' successfully!');
});
mongoose.connect(dbURI);

app.listen(port,function(){
	console.log('Now serving the app at http://localhost:' + port);
});

app.get('/data',function(req,res){
	datasetModel.find(function(err,data){
		if(err){
			return res.send(err);
		}
		res.json(data);
	});
});

app.post('/data',function(req,res){
	var newItem = new datasetModel(req.body);
	newItem.save(function(err,newItem){
		if(err) return console.log(err);
		res.json({"status":"success"});
	})
});