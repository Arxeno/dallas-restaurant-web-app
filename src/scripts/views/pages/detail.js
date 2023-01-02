import RestaurantDBSource from '../../data/restaurantdb-source';
import UrlParser from '../../routes/url-parser';

const Detail = {
  async render() {
    return `
    <div class="content">
      <h1 id="head-title-restaurant">Detail</h1>
      <section id="card-container"></section>
    </div>  
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantDBSource.detailRestaurant(url.id);
    console.log(restaurant.restaurant);
  },
};

export default Detail;
