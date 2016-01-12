var mongoose = require('mongoose');
var fs = require('fs');
var pa = require('path');
mongoose.connect('mongodb://localhost/music');

var Schema = mongoose.Schema;

// create a schema
/*
var userSchema = new Schema({
    name: String,
    age: Number
});
*/

var musicSchema = new Schema({
    name:String,
    path:String
});

// the schema is useless so far
// we need to create a model using it

//var User = mongoose.model('User', userSchema);
var Song = mongoose.model('Music',musicSchema);

var name;


var newSong = Song({
    name:"Roobaroo",
    path:pa.normalize("/music/song1.mp3")
});


/*

newSong.save(function(err) {
    if (err) throw err;

    console.log('Song added');
});
*/


var path,songs_all;
Song.find({}, function(err, songs) {
    if (err) throw err;

    // object of all the users
    name = songs[0].name;
    path = songs[0].path;
    songs_all = songs;
//    console.log(songs_all);

/*

    songs[1].path="/music/song1.mp3";
    console.log(songs[0].path);
    songs[1].save(function(err) {
        if (err) throw err;

        console.log('Song added');
    });
*/


});

/*
User.find({name:"sk"}, function(err, user) {
    if (err) throw err;

    // object of the user
    console.log(user);
    name = user[0].name;
});
*/

var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('db', { title: name , path:path, songs:songs_all, dirname:__dirname });
});

module.exports = router;
