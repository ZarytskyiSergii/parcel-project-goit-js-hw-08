import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

// створюю функцію, що зберігає поточний час відтворення відео в localStorage
const saveCurrentTime = throttle(function (data) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(data));
}, 1000);

player.on('timeupdate', function (data) {
  
  saveCurrentTime(data.seconds);
});

// тепер Функція встановлює збережений час відтворення після перезавантаження сторінки
function setSavedTime() {
  const savedTime = JSON.parse(localStorage.getItem('videoplayer-current-time'));
  if (savedTime) {
    player.setCurrentTime(savedTime);
  }
}


window.onload = setSavedTime;



