import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const STORAGE_KEY = "videoplayer-current-time";
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(saveTime, 1000));

function saveTime(data) { 
    const seconds = data.seconds;
    localStorage.setItem(STORAGE_KEY, seconds);
}

function updatePlayer() { 
    const seconds = localStorage.getItem(STORAGE_KEY);
    if (seconds) { 
        player.setCurrentTime(seconds)
    }
}

updatePlayer()



