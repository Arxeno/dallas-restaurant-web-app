import RestaurantDBSource from '../../data/restaurantdb-source';
import UrlParser from '../../routes/url-parser';
import FavoriteButtonInitiator from '../../utils/favorite-button-initiator';
import TemplateCreator from '../templates/template-creator';

const Detail = {
  async render() {
    return `
    <div id="detail" class="content">
    </div>  
    `;
  },

  async afterRender() {
    const detailContainer = document.querySelector('#detail');
    try {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const restaurant = await RestaurantDBSource.detailRestaurant(url.id);
      console.log(restaurant);
      detailContainer.innerHTML += TemplateCreator.createRestaurantDetailTemplate(restaurant);

      FavoriteButtonInitiator.init({
        buttonContainer: document.querySelector('#favoriteButtonContainer'),
        restaurant,
      });
    } catch (error) {
      detailContainer.innerHTML = '<h2 class="error">Failed to load data</h2>';
    }
  },
};

export default Detail;
