export default class BurgerMenu {
  constructor() {
    this.burgerBtn = document.querySelector('.header__burger');
    this.navMenu = document.querySelector('.nav');
  }

  initEvent() {
    this.burgerBtn.addEventListener('click', this.toggleBurger.bind(this));
    this.navMenu.addEventListener('click', (e) => {
      if (e.target.classList.contains('nav__link') || !e.target.classList.contains('nav__list')) {
        this.toggleBurger();
      }
    });
  }

  toggleBurger() {
    this.burgerBtn.classList.toggle('active');
    document.body.classList.toggle('hide');
    this.navMenu.classList.toggle('active');
  }
}
