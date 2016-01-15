var mongoose = require('mongoose');
var fs = require('fs');
var pa = require('path');
var id3 = require('id3js');
var Sync = require('sync');

mongoose.connect('mongodb://localhost/music');

var Schema = mongoose.Schema;

var songScheme = new Schema({
    title:String,
    path:String,
    artist:String,
    album:String,
    length:String,
    release_date: Date,
    album_art:String,
    album_art_small:String,
    rating:Number,
    views:Number,
    genre:String
},{ collection: 'songs' });

// the schema is useless so far
// we need to create a model using it

var Song = mongoose.model('Song',songScheme);
var name;


var path,songs_all,albums,album_arts;
Song.find({}, function(err, songs) {
    if (err) throw err;
    songs_all = songs;
});

var x = 'tu';
Song.find({}, function(err, songs) {
    if (err) throw err;
    songs_all = songs;
//    console.log(songs);
});


//{'album':'2 States (2014)'},
Song.collection.distinct("album_art", function(err, results){
    if (err) throw err;
//    console.log(results);
    album_arts = results;
});

Song.collection.distinct("album", function(err, results){
    if (err) throw err;
    console.log(results);
    albums = results;
});

var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('db', {songs:songs_all, dirname:__dirname,albums:albums,album_arts:album_arts });
});

<<<<<<< HEAD
module.exports = {
    router,
    Song
}
=======
//module.exports = {
    //router,
    //Song
//};


module.exports = router;
module.exports.Song = Song;
>>>>>>> 800a2e50f344f799d158406700d657d5da4f87d7
