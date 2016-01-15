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

function add_to_queue(song) {
    var current_queue;
    alert("Hey");
/*
    if(localstorage.getItem("queue")===null)
    {
        current_queue = [];
    }
    else
    {
        current_queue = JSON.parse(localStorage["queue"]);
    }
    current_queue.push(song);
    localStorage["queue"] = current_queue;
*/
}