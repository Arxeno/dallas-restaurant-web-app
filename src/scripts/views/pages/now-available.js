import RestaurantDBSource from '../../data/restaurantdb-source';
import TemplateCreator from '../templates/template-creator';

const NowAvailable = {
  async render() {
    return `
    <img
        id="hero-image"
        src="./images/heros/hero-image_1.jpg"
        alt="people cooking"
    />
    <div class="content">
      <h1 id="head-title-restaurant">Explore The World of Food</h1>
      <section id="card-container"></section>
    </div>
    `;
  },

  async afterRender() {
    const cardContainer = document.querySelector('#card-container');
    try {
      const restaurants = await RestaurantDBSource.nowAvailable();
      restaurants.forEach((restaurant) => {
        cardContainer.innerHTML += TemplateCreator.createRestaurantCardTemplate(restaurant);
      });
    } catch (error) {
      cardContainer.innerHTML = '<h2 class="error">Failed to load data</h2>';
    }
  },
};

export default NowAvailable;
