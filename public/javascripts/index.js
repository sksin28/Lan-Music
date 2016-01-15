function play(loc){
    var player = document.getElementById('player');
    var mp3player = document.getElementById('mp3player');
    mp3player.src = loc;
    player.autoplay = "autoplay";
//        player.setSrc(loc);
    player.load();
    player.play();
    return false;
}
