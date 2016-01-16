
var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var db = require('./db');

function buildResultSet(docs) {
    var result = [];
    for(var object in docs){
        result.push(docs[object]);
    }
    return result;
}

router.get('/',function(req,res){
   //res.send('fuck you');
   console.log('hello \n');
   var query = req.query.key;
   console.log(query); 
   db.Song.find( {title:{'$regex':query}}, function(err, songs) {
    if (err) throw err;
    console.log('searching in database');
    console.log(songs);
       var result = buildResultSet(songs);
       var data=[];
       for(i=0;i<songs.length;i++)
       {
           data.push(songs[i].title);
       }
       console.log(data);
       res.end(JSON.stringify(data));

/*
       res.send(result, {
           'Content-Type': 'application/json'
       }, 200);
*/
//    res.send({search_songs:songs[0].title,search_song:songs[1].title});
});

});

module.exports = router;
