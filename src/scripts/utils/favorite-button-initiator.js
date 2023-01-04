import 'regenerator-runtime';
import FavoriteRestaurantIdb from '../data/favorite-restaurant-idb';
import TemplateCreator from '../views/templates/template-creator';

const FavoriteButtonInitiator = {
  async init({ buttonContainer, restaurant }) {
    this._buttonContainer = buttonContainer;
    this._restaurant = restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestaurantFavorited(id)) {
      this._renderDeleteFavoriteButton();
    } else {
      this._renderPutToFavoriteButton();
    }
  },

  async _isRestaurantFavorited(id) {
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(id);
    return !!restaurant;
  },

  _renderDeleteFavoriteButton() {
    this._buttonContainer.innerHTML = TemplateCreator.createDeleteFavoriteButton();

    const favoriteButton = document.querySelector('#favoriteButton');
    favoriteButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.deleteRestaurant(this._restaurant.id);
      this._renderButton();
    });
  },

  _renderPutToFavoriteButton() {
    this._buttonContainer.innerHTML = TemplateCreator.createFavoriteButton();

    const favoriteButton = document.querySelector('#favoriteButton');
    favoriteButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.putRestaurant(this._restaurant);
      this._renderButton();
    });
  },
};

export default FavoriteButtonInitiator;
