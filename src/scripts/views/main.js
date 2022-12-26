// import dataJson from '../../DATA.json' assert { type: 'json' };
import dataJson from '../../DATA.json';

const main = () => {
  const navigationMenu = () => {
    const hamburgerClick = () => {
      console.log('Hello World');

      const drawer = document.querySelector('#drawer');

      drawer.style.left = '0';
    };

    const exitDrawer = () => {
      const drawer = document.querySelector('#drawer');
      drawer.style.left = '-100vw';
    };

    const navBarUl = document.querySelector('nav ul#main-ul');

    if (window.innerWidth <= 550) {
      console.log(navBarUl);
      navBarUl.innerHTML = `
        <button id="hamburger-menu" tabindex="2"><img src="images/hamburger-menu.png" alt="hamburger menu"></button>
        <div id="drawer">
          <ul>
            <li><a href="/" tabindex="3">Home</a></li>
            <li><a href="#" tabindex="4">Favourite</a></li>
            <li>
              <a href="https://raisyam.netlify.app" target="_blank" tabindex="5">About Us</a>
            </li>
            <button id="exit-drawer" tabindex="6">Exit</button>
          </ul>
        </div>`;

      const exitDrawerButton = document.querySelector('#exit-drawer');
      exitDrawerButton.addEventListener('click', exitDrawer);

      const hamburgerButton = document.querySelector('#hamburger-menu');
      hamburgerButton.addEventListener('click', hamburgerClick);
    } else {
      navBarUl.innerHTML = `
        <li><a href="/" tabindex="2">Home</a></li>
        <li><a href="#" tabindex="3">Favourite</a></li>
        <li>
          <a href="https://raisyam.netlify.app" target="_blank" tabindex="4">About Us</a>
        </li>`;
    }
  };
  navigationMenu();
  addEventListener('resize', navigationMenu);

  // console.log(dataJson.restaurants[0]);

  const footer = document.querySelector('footer');
  document.body.removeChild(footer);

  for (let i = 0; i < dataJson.restaurants.length; i += 1) {
    const {
      id, name, description, pictureId, city, rating,
    } = dataJson.restaurants[i];
    // const id = dataJson.restaurants[i].id;
    // const name = dataJson.restaurants[i].name;
    // const description = dataJson.restaurants[i].description;
    // const pictureUrl = dataJson.restaurants[i].pictureId;
    // const city = dataJson.restaurants[i].city;
    // const rating = dataJson.restaurants[i].rating;

    const card = `
    <div id="${id}" class="card" tabindex="${i + 7}">
      <img
        src="${pictureId}"
        alt="restaurant photo"
      />
      <div class="card-title"><p>${name}, ${city}</p></div>
      <div class="card-content-container">
        <div class="rating">
          <h1>${rating}</h1>
          <div><p>Rating</p></div>
        </div>
        <p class="description">
          ${description.slice(0, 72)}...
        </p>
      </div>
    </div>`;

    document.querySelector('#card-container').innerHTML += card;
  }

  document.body.appendChild(footer);
};

export default main;
