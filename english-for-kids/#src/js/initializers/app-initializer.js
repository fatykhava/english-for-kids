import EventsInitializer from './events-initializer';

export default class AppInitializer {
  constructor() {
    this.eventsInitializer = new EventsInitializer();
  }

  initApp() {
    this.eventsInitializer.initEvents();
  }
}
