import 'regenerator-runtime'; /* for async await transpile */
import '../styles/style.scss';
import '../styles/responsive.scss';
import App from './views/app';
import swRegister from './utils/sw-register';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const app = new App({
  skipToContent: document.querySelector('#skip-to-content'),
  hamburgerButton: document.querySelector('#hamburger-menu__button'),
  drawer: document.querySelector('#drawer-menu'),
  drawerLinks: document.querySelectorAll('.drawer-links'),
  mainContent: document.querySelector('#main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
