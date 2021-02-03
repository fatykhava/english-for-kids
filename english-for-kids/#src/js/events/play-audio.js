import GetTopicJSON from '../helpers/get-topic-json';

export default class PlayAudio {
  constructor() {
    this.topicJson = new GetTopicJSON();
  }

  init() {
    const cardlist = document.querySelectorAll('.list__item');
    cardlist.forEach((listItem) => {
      listItem.addEventListener('click', this.playAudio.bind(this));
    });
  }

  playAudio(e) {
    const toggleInput = document.querySelector('.header__toggle-checkbox');
    const { item } = e.target.closest('.list__item').dataset;
    const keyTopic = document.querySelector('.main__title').innerHTML.toLowerCase();
    const topicObj = this.topicJson.getTopic(keyTopic);

    if (!toggleInput.checked) {
      new Audio(`${topicObj.card[item].audio}`).autoplay = true;
    }
  }

  listenAudio(topicObj, audio) {
    const obj = topicObj;
    new Audio(`${obj.card[audio].audio}`).autoplay = true;
  }

  playCorrect() {
    new Audio('./assets/audio/correct.mp3').autoplay = true;
  }

  playError() {
    new Audio('./assets/audio/error.mp3').autoplay = true;
  }

  playWin() {
    new Audio('./assets/audio/success.mp3').autoplay = true;
  }

  playLose() {
    new Audio('./assets/audio/failure.mp3').autoplay = true;
  }
}
