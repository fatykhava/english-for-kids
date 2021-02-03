export default class GetActiveLink {
  constructor() {
    this.navLinks = document.querySelectorAll('.nav__link');
  }

  getActive(keyTopic) {
    this.navLinks.forEach((link) => {
      if (link.dataset.topic === keyTopic) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }
}
