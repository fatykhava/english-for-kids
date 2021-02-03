export default class WindowResize {
  constructor() {
    this.cardList = document.querySelector('.list');
    this._mediumWidth = 1350;
    this._smallWidth = 750;
    this._bigCard = 450;
    this._mediumCard = 200;
    this.title = document.querySelector('.main__title');
  }

  initEvent() {
    this.resizeCard();
    window.addEventListener('resize', this.resizeCard.bind(this));
  }

  resizeCard() {
    if (this.title === 'english-for-kids') {
      if (document.body.clientWidth < this._smallWidth) {
        this.cardList.style.width = '100%';
      } else if (document.body.clientWidth < this._mediumWidth) {
        this.cardList.style.width = `calc(100% - ${this._mediumCard}px)`;
      } else {
        this.cardList.style.width = `calc(100% - ${this._bigCard}px)`;
      }
    }
  }
}
