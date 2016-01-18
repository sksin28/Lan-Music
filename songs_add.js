var mongoose = require('mongoose');
var fs = require('fs');
var pa = require('path');
var id3 = require('id3js');
var Sync = require('sync');
var folder="Ajab Prem Ki Ghazab Kahani";
var path= "./public/music/"+folder;
var song_folder = fs.readdirSync(path);

function endsWith(str, suffix) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
}

mongoose.connect('mongodb://localhost/music');

var Schema = mongoose.Schema;

// create a schema

var songScheme = new Schema({
    title:String,
    path:String,
    artist:String,
    album:String,
    length:String,
    release_date: Date,
    album_art_small:String,
    album_art:String,
    rating:Number,
    views:Number,
    genre:String
},{ collection: 'songs' });

// the schema is useless so far
// we need to create a model using it

var Song = mongoose.model('Song',songScheme);
var name;


Sync(function(){

    for(var i=0;i<song_folder.length;i++)
    {
        var file = song_folder[i];
        if(endsWith(file, ".mp3"))
        {
            // Function.prototype.sync() interface is same as Function.prototype.call() - first argument is 'this' context
            var tags = id3.sync(null,{ file: path+'/'+file, type: id3.OPEN_LOCAL });
//            console.log(tags); // 5
            var pat = '/music/'+folder+'/'+file;
            var newSong = Song({
                title:tags.title,
                album:tags.album,
                artist:tags.artist,
                genre:tags.v2.genre,
                path:pat,
                album_art_small:'/music/'+folder+'/AlbumArtSmall.jpg',
                album_art:'/music/'+folder+'/Folder.jpg',
                rating:0,
                views:0
            });
//            console.log(newSong.path);

             newSong.save(function(err) {
             if (err) throw err;

             console.log('Song added');
             });
        }
    }
})



var path,songs_all;
Song.find({}, function(err, songs) {
    if (err) throw err;
    songs_all = songs;
});

