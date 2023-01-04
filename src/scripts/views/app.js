import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({
    skipToContent, hamburgerButton, drawer, drawerLinks, mainContent,
  }) {
    this._skipToContent = skipToContent;
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

    const urlSplit = UrlParser.parseActiveUrlWithoutCombiner();
    let { resource, id, verb } = urlSplit;
    resource = (resource ? `/${resource}` : '');
    id = (id ? `/${id}` : '');
    verb = (verb ? `/${verb}` : '');
    console.log('RESOURCE', resource);
    console.log('ID', id);
    console.log('VERB', verb);
    const newHrefAndId = `${resource}${id}${verb}/main`;
    this._skipToContent.href = `#${newHrefAndId}`;
    this._mainContent.id = newHrefAndId;
  }
}

export default App;
