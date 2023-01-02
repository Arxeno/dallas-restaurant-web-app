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
    const restaurants = await RestaurantDBSource.nowAvailable();
    console.log(restaurants);
    console.log('--------------');
    const cardContainer = document.querySelector('#card-container');
    restaurants.forEach((restaurant) => {
      cardContainer.innerHTML += TemplateCreator.createRestaurantCardTemplate(restaurant);
    });
  },
};

export default NowAvailable;
