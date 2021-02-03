import Game from '../helpers/game';

export default class StartGame {
  constructor() {
    this.game = new Game();
  }

  initEvent() {
    this.playBtn = document.querySelector('.btn-play');
    this.playBtn.addEventListener('click', this.game.init.bind(this.game));
  }
}
