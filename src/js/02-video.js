import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const PLAYER_TIME = 'videoplayer-current-time';

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(event) {
  localStorage.setItem(PLAYER_TIME, event.seconds);
}

const currentTime = JSON.parse(localStorage.getItem(PLAYER_TIME));
player.setCurrentTime(Number(currentTime));
