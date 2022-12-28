const DrawerInitiator = {
  init({
    hamburgerButton, drawer, drawerLinks, mainContent,
  }) {
    this._hamburgerButton = hamburgerButton;
    this._drawer = drawer;
    this._drawerLinks = drawerLinks;
    this._mainContent = mainContent;

    this._initialListener();
  },

  _initialListener() {
    this._hamburgerButton.addEventListener('click', (event) => {
      this._toggleDrawer(event);
    });

    this._mainContent.addEventListener('click', (event) => {
      this._closeDrawer(event);
    });

    for (let i = 0; i < this._drawerLinks.length; i += 1) {
      this._drawerLinks[i].addEventListener('focus', (event) => {
        this._openDrawer(event);
      });
    }
  },

  _openDrawer(event) {
    event.stopPropagation();
    this._drawer.classList.add('open-drawer');
  },

  _closeDrawer(event) {
    event.stopPropagation();
    this._drawer.classList.remove('open-drawer');
  },

  _toggleDrawer(event) {
    event.stopPropagation();
    this._drawer.classList.toggle('open-drawer');
  },
};

export default DrawerInitiator;
