var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var port = 3456;
var index = require('./modules/index.js');
var calculate = require('./modules/calculate.js');

// app.set("port", 3456);

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded( {extended: true} ));
app.use( '/', index);
app.use( '/calculate', calculate);

app.listen(port, function(){
  console.log("Listening on port: ", port);
});
