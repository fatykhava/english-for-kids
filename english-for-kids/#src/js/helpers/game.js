import Randomizer from './randomizer';
import PlayAudio from '../events/play-audio';
import GetTopicJSON from './get-topic-json';
import svgRepeat from '../svg-companents/svg-repeat';
import svgCorrect from '../svg-companents/svg-correct';
import svgError from '../svg-companents/svg-error';

export default class Game {
  constructor() {
    this.topicObj = new GetTopicJSON();
    this.playAudio = new PlayAudio();
    this.randomizer = new Randomizer();
  }

  init() {
    const cardsList = document.querySelectorAll('.list__item');
    const playBtn = document.querySelector('.btn-play');
    const repeatBtn = document.querySelector('.btn-audio');
    const audioArr = this.randomizer.init(cardsList.length);

    const i = 0;
    const audioNumb = audioArr[i];

    playBtn.classList.add('hidden');
    repeatBtn.classList.remove('hidden');
    repeatBtn.innerHTML = svgRepeat();
    this.audioGame(i, audioNumb, audioArr);
  }

  audioGame(i, audioNumb, audioArr) {
    let index = i;
    let audioNumber = audioNumb;
    const title = document.querySelector('.main__title');
    const keyTopic = title.innerHTML.toLowerCase();
    const topicObj = this.topicObj.getTopic(keyTopic);
    const repeatBtn = document.querySelector('.btn-audio');
    const cardsList = document.querySelectorAll('.list__item');
    const ratingList = document.querySelector('.rating-list');
    let correctAnswer = 0;
    let errorAnswer = 0;

    this.playAudio.listenAudio(topicObj, audioNumber);

    repeatBtn.addEventListener('click', () => {
      this.playAudio.listenAudio(topicObj, audioNumber);
    });

    cardsList.forEach((card) => {
      card.addEventListener('click', () => {
        if (card.dataset.item === String(audioNumber)) {
          this.playAudio.playCorrect();
          index += 1;
          correctAnswer += 1;
          card.classList.add('correct');
          this.createRatingLi(true);

          if (correctAnswer === cardsList.length) {
            ratingList.innerHTML = '';
            return this.checkWin(errorAnswer);
          }

          audioNumber = audioArr[index];
          this.playAudio.listenAudio(topicObj, audioNumber);
        } else {
          if (card.classList.contains('correct')) { return false; }

          this.playAudio.playError();
          errorAnswer += 1;
          this.createRatingLi(false);
        }
        return false;
      });
    });
  }

  checkWin(errorCount) {
    const repeatBtn = document.querySelector('.btn-audio');
    const popupContainer = document.querySelector('.final-popup');
    repeatBtn.classList.add('hidden');

    if (errorCount === 0) {
      this.playAudio.playWin();
      popupContainer.innerHTML = `<div class="final-popup__wr-pic">
                                    <picture class="final-popup__pic pic">
                                      <source srcset="./assets/img/mikkey.webp">
                                      <img src="./assets/img/mikkey.png"} class="pic__img" alt="Win">
                                    </picture>
                                  </div>
                                  <h3 class="final-popup__title">Fantastic! You WIN!!!</h3>`;
    } else {
      this.playAudio.playLose();
      popupContainer.innerHTML = `<div class="final-popup__wr-pic">
                                    <picture class="final-popup__pic pic">
                                      <source srcset="./assets/img/failure.webp">
                                      <img src="./assets/img/failure.png"} class="pic__img" alt="Lose">
                                    </picture>
                                  </div>
                                  <h3 class="final-popup__title">Sorry, you have ${errorCount} mistakes. You need train more!</h3>`;
    }

    popupContainer.classList.add('show');

    setTimeout(() => {
      window.location.reload();
    }, 3000);
  }

  createRatingLi(isCorrect) {
    const ratingList = document.querySelector('.rating-list');
    const item = document.createElement('li');

    if (isCorrect) {
      item.classList.add('rating-list__correct');
      item.innerHTML = svgCorrect();
    } else {
      item.classList.add('rating-list__error');
      item.innerHTML = svgError();
    }

    ratingList.append(item);
  }
}
