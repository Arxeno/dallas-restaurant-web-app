import 'regenerator-runtime'; /* for async await transpile */
import '../styles/style.scss';
// import main from './views/main';

// Temporary imports
import DrawerInitiator from './utils/drawer-initiator';

// temporary main
const main = () => {
  const hamburgerButton = document.querySelector('#hamburger-menu__button');
  const drawer = document.querySelector('#drawer-menu');
  const mainContent = document.querySelector('#main');

  DrawerInitiator.init({ hamburgerButton, drawer, mainContent });
};

document.addEventListener('DOMContentLoaded', main);
