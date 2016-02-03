'use strict';
var query = require('../models/query-cache.js');
module.exports=function(callback){
    query.getQueries(function(data){
        callback(data);
    })
}