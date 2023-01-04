import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import TemplateCreator from '../templates/template-creator';

const Favorites = {
  async render() {
    return `
    <div class='content'>
      <h1 id='head-title-restaurant'>Favorites</h1>
      <section id='card-container'></section>
    </div>  
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const cardContainer = document.querySelector('#card-container');

    if (restaurants.length > 0) {
      restaurants.forEach((restaurant) => {
        cardContainer.innerHTML += TemplateCreator.createRestaurantCardTemplate(restaurant);
      });
    } else {
      cardContainer.innerHTML = '<p class="center-text">You don\'t have any favorited restaurant<p>';
    }
  },
};

export default Favorites;
