import 'regenerator-runtime'; /* for async await transpile */
import '../styles/style.scss';
import '../styles/responsive.scss';
import App from './views/app';
// import main from './views/main';

const app = new App({
  hamburgerButton: document.querySelector('#hamburger-menu__button'),
  drawer: document.querySelector('#drawer-menu'),
  drawerLinks: document.querySelectorAll('.drawer-links'),
  mainContent: document.querySelector('#main'),
});

// document.addEventListener('DOMContentLoaded', main);
