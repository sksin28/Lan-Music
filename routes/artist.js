var express = require('express');
var router = express.Router();
var url = require('url');
var mongoose = require('mongoose');
var fs = require('fs');
var db = require('./db').Song;

mongoose.createConnection('mongodb://localhost/music');

var path,songs_all,albums,album_arts;


router.get('/', function(req, res, next) {
    var x =decodeURIComponent(req.originalUrl);
//    console.log(x);
    x= x.substr(8, x.length-8);
//    console.log(x);
    db.find({"artist":{'$regex':x}}, function(err, songs) {
        if (err) throw err;
        songs_all = songs;
//        console.log(songs);
    });
    db.collection.distinct("album", {"artist":{'$regex':x}}, function(err, album) {
        if (err) throw err;
        albums = album;
//        console.log(albums);
    });

    res.render('artist', {artist:x, title:"Title", songs: songs_all,albums:albums });
});

module.exports = router;

// the schema is useless so far
// we need to create a model using it
