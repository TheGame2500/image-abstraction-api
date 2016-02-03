'use strict';

var express  = require('express');
var app      = require('./app/app.js');
var mongoose = require('mongoose');
var server   = express();
app = app(server);
require('dotenv').load();

mongoose.connect(process.env.MONGO_URI);

var port = process.env.PORT || 8080;
server.listen(port,  function () {
	console.log('Node.js listening on port ' + port + '...');
});