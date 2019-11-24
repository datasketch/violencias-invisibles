var baseURL = document.querySelector('input').value;
var firstAudioBtn = document.getElementById('first-audio');
var secondAudioBtn = document.getElementById('last-audio');

var firstAudioMedia = new Audio(baseURL + 'media/leandra.mp3');
var secondAudioMedia = new Audio(baseURL + 'media/yury.mp3');

firstAudioBtn.addEventListener('click', function() {
  var isPaused = firstAudioMedia.paused;

  if (isPaused) {
    firstAudioBtn.textContent = 'Pausar audio';
    firstAudioMedia.play();
    return;
  }

  firstAudioBtn.textContent = 'Reproducir audio';
  firstAudioMedia.pause();
});

secondAudioBtn.addEventListener('click', function() {
  var isPaused = secondAudioMedia.paused;

  if (isPaused) {
    secondAudioBtn.textContent = 'Pausar audio';
    secondAudioMedia.play();
    return;
  }

  secondAudioBtn.textContent = 'Reproducir audio';
  secondAudioMedia.pause();
});
