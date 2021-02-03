import PageLoading from '../events/page-loading';
import BurgerMenu from '../events/burger-menu';
import ToggleGame from '../events/toggle-game';
import WindowResize from '../events/window-resize';
import CreateCardList from '../renders/create-card-list';

export default class EventsInitializer {
  constructor() {
    this.eventsPool = [
      new BurgerMenu(),
      new ToggleGame(),
      new WindowResize(),
    ];
    this.loader = new PageLoading();
    this.cardList = new CreateCardList();
  }

  initEvents() {
    this.loader.initEvent();
    this.eventsPool.forEach((item) => {
      document.addEventListener('DOMContentLoaded', item.initEvent());
    });
    this.cardList.initCardList();
  }
}
