import StartGame from './start-game';

export default class ToggleGame {
  constructor() {
    this.toggleContainer = document.querySelector('.header__toggle');
    this.toggleBtn = document.querySelector('.header__toggle-checkbox');
    this.toggleText = document.querySelector('.header__toggle-text');
    this.startGame = new StartGame();
  }

  initEvent() {
    this.toggleBtn.addEventListener('change', this.toggleGame.bind(this));
  }

  toggleGame() {
    const cardsList = document.querySelectorAll('.list__item');
    const mainTitle = document.querySelector('.main__title').innerHTML;
    const playBtn = document.querySelector('.btn-play');
    playBtn.innerHTML = 'Start game';

    if (this.toggleBtn.checked) {
      this.toggleText.innerHTML = 'PLAY';
      this.toggleContainer.classList.add('play');

      if (mainTitle.toUpperCase() !== 'english-for-kids') {
        cardsList.forEach((card) => {
          card.classList.add('play');
        });

        playBtn.classList.remove('hidden');
        this.startGame.initEvent();
      }
    } else {
      this.toggleText.innerHTML = 'TRAIN';
      this.toggleContainer.classList.remove('play');

      playBtn.classList.add('hidden');

      cardsList.forEach((card) => {
        card.classList.remove('play');
      });
    }
  }
}
