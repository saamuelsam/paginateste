var player;
var checkInterval = 0.1; // check every 100 ms (which is 0.1 seconds)

function onYouTubeIframeAPIReady() {
  player = new YT.Player('youtube-player', {
    events: {
      'onReady': onPlayerReady
    }
  });
}

function onPlayerReady(event) {
  setInterval(function() {
    if (player.getCurrentTime() >= 8 && document.getElementById("buy-button").style.display !== "block") {
      document.getElementById("buy-button").style.display = "block";
    }
  }, checkInterval * 1000);
}
