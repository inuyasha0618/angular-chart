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

app.get('/data/:id',function(req,res){
	datasetModel.findOne({_id:req.params.id},function(err,data){
		if(err){
			return res.send(err);
		}
		res.json(data);
	})
})

app.delete('/data/:id',function(req,res){
	datasetModel.remove({_id:req.params.id},function(err,data){
		if(err) return console.log(err);
		datasetModel.find(function(err,data){
			if(err) return console.log(err);
			res.json(data);
		})
	})
})

app.post('/data/new',function(req,res){
	// var item = new datasetModel(req.body);
	var item = req.body;
	var id = item._id;
	if(id != undefined){
		var update = {};
		update.label = item.label;
		update.fillColor = item.fillColor;
		update.strokeColor = item.strokeColor;
		update.pointColor = item.pointColor;
		update.pointStrokeColor = item.pointStrokeColor;
		update.data = item.data;
		
		datasetModel.update({_id:id},update,function(err,num){
			if (err) {return console.log(err)};
			console.log("完成更新数："+num);
			res.json({"status":"success"});
		})
	}else{
		new datasetModel(item).save(function(err,newItem){
			if(err) return console.log(err);
			res.json({"status":"success"});
		})
	}
});