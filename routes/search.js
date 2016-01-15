var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var db = require('./db');

router.get('/',function(req,res){
   //res.send('fuck you');
   console.log('hello \n');
   var query = req.query.key;
   console.log(query); 
   db.Song.find( {name:{'$regex':query}}, function(err, songs) {
    if (err) throw err;
   console.log('searching in database');
    // object of all the users
    //name = songs[0].name;
    //path = songs[0].path;
    //songs_all = songs;
    console.log(songs);


});

});

module.exports = router;
