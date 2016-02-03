'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var searchRecords = new Schema({
    term: String,
    when: Date
});

var record = mongoose.model('record',searchRecords);

module.exports =
{
    saveQuery : function(word){
        record.create({
            term : word,
            when : new Date().toJSON()
        })
    },
    
    getQueries : function(callback){
            var query = record.find({},{_id:0, term:1, when:1}).sort({"when":-1}).limit(10);
            return (query.exec(function(err, results){
                if(err) throw err;
                callback(results);
            }))
    }
}