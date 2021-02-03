import svgRepeat from '../svg-companents/svg-repeat';
import GetActiveLink from './get-active-link';
import GetTopicJSON from './get-topic-json';
import ShowTranslate from './show-translate';
import PlayAudio from '../events/play-audio';

export default class CheckTopic {
  constructor() {
    this._allTopics = ['family', 'home', 'school', 'weather', 'emotions', 'animals', 'verbs1', 'verbs2'];
    this.title = document.querySelector('.main__title');
    this.mainPic = document.querySelector('.main__pic');
    this.cardList = document.querySelector('.list');
    this.activeLink = new GetActiveLink();
    this.topicJson = new GetTopicJSON();
    this.translate = new ShowTranslate();
    this.playAudio = new PlayAudio();
  }

  init() {
    if (this.title.innerHTML.toLowerCase() === 'english-for-kids') {
      this.getMainPage();
    } else {
      this.getTopicPage();
    }
  }

  getTopic() {
    const keyTopic = this.title.innerHTML.toLowerCase();
    return this.topicJson.getTopic(keyTopic);
  }

  getMainPage() {
    this.mainPic.style.display = 'block';

    const topicLi = document.querySelectorAll('.list__item');

    for (let i = 0; i < topicLi.length; i++) {
      topicLi[i].setAttribute('data-topic', this._allTopics[i]);
    }
  }

  getTopicPage() {
    this.mainPic.style.display = 'none';
    this.cardList.style.width = '100%';

    this.playAudio.init();

    const wrTitles = document.querySelectorAll('.list__wr-title');

    for (let i = 0; i < wrTitles.length; i++) {
      const translateWord = document.createElement('h3');
      const btnTranslate = document.createElement('div');
      const topicObj = this.getTopic();

      btnTranslate.innerHTML = svgRepeat();
      translateWord.innerHTML = topicObj.card[i].translate;
      translateWord.classList.add('list__title', 'hidden');
      btnTranslate.classList.add('btn-translate');
      wrTitles[i].append(translateWord, btnTranslate);
    }

    document.querySelectorAll('.btn-translate').forEach((btn) => {
      btn.addEventListener('click', this.translate.initTranslate);
    });
  }
}
