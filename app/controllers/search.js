'use strict';
var query = require('../models/query-cache.js');
var imgur = require('imgur-search');
var findImages = new imgur('cc48bdd8d933793');

module.exports = function (word, offset, res) {
    query.saveQuery(word);
    process.env.IMGUR_CLIENT_KEY;
    findImages.search(word, 'top', offset)
                    .done(function(data){
                        return res.status(201).json(data); 
                    })
                    .fail(function(error){
                        return handleError(res, error);
                    });
}

function handleError(res, err) {
    return res.status(500).send(err);
}


