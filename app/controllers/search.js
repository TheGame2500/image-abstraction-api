'use strict';
var query = require('../models/query-cache.js');
var imgur = require('imgur-search');
var findImages = new imgur('cc48bdd8d933793');

module.exports = function (word, offset, callback) {
    query.saveQuery(word);
    findImages.search(word, "top",offset)
                    .done(function(data){
                        callback(null,data);
                    })
                    .fail(function(err,data){
                        callback(err,data)
                    })
}


