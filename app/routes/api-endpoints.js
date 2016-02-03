'use strict';
var recentSearches = require('../controllers/recent-searches.js');
var search = require('../controllers/search.js');

module.exports=function(app){
    app.route('/api/latest/imagesearch/').get(function(req,res){
        recentSearches(function(data){
            res.json(data);
        });
    })
    
    app.route('/api/imagesearch/:word').get(function(req,res){
        search(req.params.word, req.query.offset, function(err,data){
            if(err)
                throw err;
            res.json(data);
        });
    })
}

