import DrawerInitiator from '../utils/drawer-initiator';

class App {
  constructor({
    hamburgerButton, drawer, drawerLinks, mainContent,
  }) {
    this._hamburgerButton = hamburgerButton;
    this._drawer = drawer;
    this._drawerLinks = drawerLinks;
    this._mainContent = mainContent;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      hamburgerButton: this._hamburgerButton,
      drawer: this._drawer,
      drawerLinks: this._drawerLinks,
      mainContent: this._mainContent,
    });
  }
}

export default App;
