import RestaurantDBSource from '../../data/restaurantdb-source';
import UrlParser from '../../routes/url-parser';
import TemplateCreator from '../templates/template-creator';

const Detail = {
  async render() {
    return `
    <div id="detail" class="content">
    </div>  
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantDBSource.detailRestaurant(url.id);
    console.log(restaurant);
    const detailContainer = document.querySelector('#detail');
    detailContainer.innerHTML += TemplateCreator.createRestaurantDetailTemplate(restaurant);
  },
};

export default Detail;
