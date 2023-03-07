import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');

const player = new Player(iframe);

player.on('timeupdate', handleTimeupdate);

function handleTimeupdate(currentTime) {
    console.log(currentTime.seconds);
    localStorage.setItem("videoplayer-current-time", JSON.stringify(currentTime.seconds));
}

