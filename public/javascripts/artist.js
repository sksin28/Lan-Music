/**
 * Created by Saurabh on 15-Jan-16.
 */
document.addEventListener('DOMContentLoaded', function() {
    var album_click = document.getElementById('album_click');
    album_click.addEventListener('click',function(){

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
            console.log(x);
            db.collection.distinct("album", {"artist":{'$regex':'Singh'}}, function(err, albums) {
                if (err) throw err;
                albums = albums;
                console.log(songs);
            });
            res.render('artist', {albums:albums});
        });

        module.exports = router;

// the schema is useless so far
// we need to create a model using it

    })
});