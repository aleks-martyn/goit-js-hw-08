import Player from '@vimeo/player';

import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');

const player = new Player(iframe);

const throttledHandleTimeupdate = throttle(handleTimeupdate, 1000);

player.on('timeupdate', throttledHandleTimeupdate);

function handleTimeupdate(currentTime) {
  console.log(currentTime.seconds);
  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(currentTime.seconds)
  );
}

const savedTime = localStorage.getItem('videoplayer-current-time');
const parsedTime = JSON.parse(savedTime);

player.setCurrentTime(parsedTime);
