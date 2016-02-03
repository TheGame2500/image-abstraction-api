'use strict';
var recentSearches = require('../controllers/recent-searches.js');
var search = require('../controllers/search.js');

module.exports=function(app){
    app.route('/api/latest/imagesearch/').get(function(req,res){
        recentSearches(res);
    })
    
    app.route('/api/imagesearch/:word').get(function(req,res){
        return search(req.params.word, req.query.offset, res);
    })
}

