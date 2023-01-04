import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

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

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._mainContent.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
