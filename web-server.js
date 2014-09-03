var express = require("express"),
methodOverride = require("method-override"),
bodyParser = require("body-parser"),
app = express(),
port = parseInt(process.env.PORT, 10) || 8080;

app.use(methodOverride()); 
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json()) 
app.use(express.static(__dirname + '/app')); 

app.listen(port);
console.log('Now serving the app at http://localhost:' + port);