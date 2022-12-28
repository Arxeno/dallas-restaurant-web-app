const DrawerInitiator = {
  init({ hamburgerButton, drawer, mainContent }) {
    this._hamburgerButton = hamburgerButton;
    this._drawer = drawer;
    this._mainContent = mainContent;

    this._initialListener();
  },

  _initialListener() {
    this._hamburgerButton.addEventListener('click', (event) => {
      event.stopPropagation();
      this._openDrawer();
    });

    this._mainContent.addEventListener('click', (event) => {
      event.stopPropagation();
      this._closeDrawer();
    });
  },

  _openDrawer() {
    this._drawer.classList.toggle('open-drawer');
  },

  _closeDrawer() {
    this._drawer.classList.remove('open-drawer');
  },
};

export default DrawerInitiator;
