'use strict';
var root         = require('./root.js');
var apiEndpoints = require('./api-endpoints.js');
module.exports = function (app){
    root(app);
    apiEndpoints(app);
}