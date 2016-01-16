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
    console.log(song.title);
//    alert(song.title);
    if (typeof localStorage === "undefined" || localStorage === null) {
        var LocalStorage = require('node-localstorage').LocalStorage;
        localStorage = new LocalStorage('./scratch');
        alert('localised');
    }
     if(localStorage.getItem("queue")===null)
        {
            current_queue = [];
            alert("labab");
        }
        else
        {
            alert("123");
            current_queue.push(JSON.parse(localStorage["queue"]));
        }
    console.log(current_queue);
    localStorage.setItem('queue', JSON.stringify(current_queue));
    return false;
}