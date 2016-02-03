'use strict';
var query = require('../models/query-cache.js');
module.exports=function(res){
    query.getQueries(res);
}