export default class PageLoading {
  constructor() {
    this.startContainer = document.querySelector('#start-bg');
    this.mainContent = document.querySelector('.main');
    this.header = document.querySelector('.header');
  }

  initEvent() {
    document.addEventListener('DOMContentLoaded', () => {
      this.startContainer.style.display = 'none';
      this.mainContent.classList.remove('hide');
      this.header.classList.remove('hide');
    });
  }
}
