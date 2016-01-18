function play(loc){
/*
   var player = document.getElementById('player');
   var mp3player = document.getElementById('mp3player');
   mp3player.src = loc;
   player.autoplay = "autoplay";
   //        player.setSrc(loc);
   player.load();
   player.play();
*/
    var player = $("#jquery_jplayer_1");
    $("#jquery_jplayer_1").jPlayer({
        ready: function () {
            $(this).jPlayer("setMedia", {
                title: "Bubble",
                mp3: loc,
            }).jPlayer("play");
        },
        cssSelectorAncestor: "#jp_container_1",
        supplied: "mp3",
        useStateClassSkin: true,
        autoBlur: false,
        smoothPlayBar: true,
        keyEnabled: true,
        remainingDuration: true,
        toggleDuration: true,
        autoPlay: true,
    });
    player.jPlayer("setMedia", {
        mp3: loc
    });
    player.jPlayer("play", 0);
   return false;
}

var myPlaylist = new jPlayerPlaylist({
    jPlayer: "#jquery_jplayer_1",
    cssSelectorAncestor: "#jp_container_1"
}, [
    {
        title:"Cro Magnon Man",
        artist:"The Stark Palace",
        mp3:"/music/song.mp3",
        poster: "http://www.jplayer.org/audio/poster/The_Stark_Palace_640x360.png"
    },
    {
        title:"Cro Magnon Man",
        artist:"The Stark Palace",
        mp3:"/music/song1.mp3",
        poster: "http://www.jplayer.org/audio/poster/The_Stark_Palace_640x360.png"
    }
], {
    playlistOptions: {
        enableRemoveControls: true
    },
    swfPath: "/javascripts",
    supplied: "ogv, m4v, oga, mp3",
    smoothPlayBar: true,
    keyEnabled: true,
    audioFullScreen: true // Allows the audio poster to go full screen via keyboard
});

myPlaylist.shuffle(true, true);

$(function () {

   $("#bar").autocomplete({
      source: function (request, response) {
         $.ajax({
            url: "http://localhost:3000/search",
            type: "GET",
            data: request,  // request is the value of search input
            success: function (data) {
               alert("HEYA"+data[0].title);
               // Map response values to fiedl label and value
               /*
                  response($.map(data, function (el) {
                  return {
label: el.fullname,
value: el._id
};
}));
*/
               }
               });
         },

               // The minimum number of characters a user must type before a search is performed.
               minLength: 2,

               // set an onFocus event to show the result on input field when result is focused
               focus: function (event, ui) {
                  this.value = ui.item.label;
                  // Prevent other event from not being execute
                  event.preventDefault();
               },
               select: function (event, ui) {
                  // Prevent value from being put in the input:
                  this.value = ui.item.label;
                  // Set the id to the next input hidden field
                  $(this).next("input").val(ui.item.value);
                  // Prevent other event from not being execute
                  event.preventDefault();
                  // optionnal: submit the form after field has been filled up
                  $('#quicksearch').submit();
               }
            });

         });


function add_to_queue(song) {
    var current_queue = [];
//    console.log(song.title);
//    alert(song.title);
    if (typeof localStorage === "undefined" || localStorage === null) {
        var LocalStorage = require('node-localstorage').LocalStorage;
        localStorage = new LocalStorage('./scratch');
    }
     if(localStorage.getItem("queue")==null)
        {
            current_queue = [];
        }
        else
        {
            current_queue= JSON.parse(localStorage["queue"]);
        }
    current_queue.push(song);
 //   console.log(current_queue);
    localStorage.setItem('queue', JSON.stringify(current_queue));
    return false;
}