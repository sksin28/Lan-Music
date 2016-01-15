var express = require('express');
var router = express.Router();
var url = require('url');
var mongoose = require('mongoose');
var fs = require('fs');
var db = require('./db').Song;

mongoose.createConnection('mongodb://localhost/music');

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


/*
if(mongoose.model.Song)
    var Song = mongoose.model('Song');
else
    var Song = mongoose.model('Song',songScheme);

*/
var path,songs_all,albums,album_arts;
/*
db.find({"album":"2 States (2014)"}, function(err, songs) {
    if (err) throw err;
    songs_all = songs;
    console.log(songs);
});

*/

router.get('/', function(req, res, next) {
    var x =decodeURIComponent(req.originalUrl);
    x= x.substr(7, x.length-7);
    console.log(x);
    db.find({"album":x}, function(err, songs) {
        if (err) throw err;
        songs_all = songs;
        console.log(songs);
    });
    res.render('album', {album:x, title:"Title", songs: songs_all });
});

module.exports = router;

// the schema is useless so far
// we need to create a model using it
