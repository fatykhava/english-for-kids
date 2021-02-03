import GetActiveLink from '../helpers/get-active-link';
import GetTopicJSON from '../helpers/get-topic-json';
import CheckTopic from '../helpers/check-topic';

export default class CreateCardList {
  constructor() {
    this._wordCount = 8;
    this.topicsLi = document.querySelectorAll('[data-topic]');
    this.keyTopic = 'english-for-kids';
    this.activeLink = new GetActiveLink();
    this.topicJson = new GetTopicJSON();
    this.checkTopic = new CheckTopic();
  }

  initCardList() {
    const topicObj = this.topicJson.getTopic(this.keyTopic);
    this.createCardList(topicObj);
  }

  createCardList(obj) {
    const mainContainer = document.querySelector('.main');
    const mainTitle = document.querySelector('.main__title');
    const cardList = document.querySelector('.list');
    const popupContainer = document.querySelector('.final-popup');

    cardList.innerHTML = '';
    popupContainer.classList.remove('show');

    mainContainer.style.backgroundImage = `url(${obj.background})`;
    mainTitle.innerHTML = obj.topic;

    for (let i = 0; i < this._wordCount; i += 1) {
      const item = document.createElement('li');
      item.classList.add('list__item');
      item.setAttribute('data-item', `${i}`);
      item.innerHTML = `<div class="list__wr-pic">
                          <picture class="list__pic pic">
                            <source srcset=${obj.card[i].webp}>
                            <img src=${obj.card[i].img} class="pic__img" alt="Family topic">
                          </picture>
                        </div>
                        <div class="list__wr-title"><h3 class="list__title">${obj.card[i].name}</h3></div>`;
      cardList.append(item);
    }

    mainTitle.scrollIntoView();
    this.checkTopic.init();

    this.topicsLi = document.querySelectorAll('[data-topic]');
    this.topicsLi.forEach((item) => {
      item.addEventListener('click', (e) => {
        this.keyTopic = e.currentTarget.dataset.topic;
        const topicObj = this.topicJson.getTopic(this.keyTopic);

        this.activeLink.getActive(this.keyTopic);
        cardList.innerHTML = '';
        this.createCardList(topicObj);
      });
    });
  }
}
