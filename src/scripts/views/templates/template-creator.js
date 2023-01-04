import CONFIG from '../../global/config';
import capitalizeWord from '../../utils/capitalize-word';

const TemplateCreator = {
  createRestaurantCardTemplate(restaurant) {
    return `
    <div id="${restaurant.id}" class="card">
      <img
        src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}"
        alt="restaurant photo"
      />
      <div class="card-title"><p>${restaurant.name}, ${restaurant.city}</p></div>
      <div class="card-content-container">
        <div class="rating">
          <h1>${restaurant.rating}</h1>
          <div><p>Rating</p></div>
        </div>
        <p class="description">
          ${restaurant.description.slice(0, 72)}...
        </p>
        <a href="#/detail/${restaurant.id}">See More</a>
      </div>
    </div>`;
  },

  createRestaurantDetailTemplate(restaurant) {
    let result = `
    <div class="content content__detail">
      <h1 id="head-title-restaurant">${restaurant.name}</h1>
      <img id="restaurant-photo__detail" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="restaurant image">
      
      <div id="favoriteButtonContainer"></div>

      <div class="restaurant__info detail-contents">
        <h2>Information</h2>
        <div>
          <h3>Location</h3>
          <p>${restaurant.address}, ${restaurant.city}</p>
        </div>
        <div>
          <h3>Rating</h3>
          <p>${restaurant.rating}</p>
        </div>
    `;

    result += this._createRestaurantCategories(restaurant.categories);
    result += this._createRestaurantDescription(restaurant.description);
    result += '</div>';
    result += this._createRestaurantMenus(restaurant.menus);
    result += this._createRestaurantReviews(restaurant.customerReviews);
    result += '</div>';

    return result;
  },

  _createRestaurantReviews(reviews) {
    let result = '<div class="restaurant__reviews detail-contents"><h2>Reviews</h2>';

    for (let i = 0; i < reviews.length; i += 1) {
      const { name, review, date } = reviews[i];

      result += this._createRestaurantReview({ name, review, date });
    }

    result += '</div>';

    return result;
  },

  _createRestaurantReview({ name, review, date }) {
    return `
    <div class="review">
      <h3>${name}</h3>
      <strong>${date}</strong>
      <p>${review}</p>
    </div>`;
  },

  _createRestaurantMenus(menus) {
    let result = '<div class="restaurant__menus detail-contents"><h2>Menus</h2>';
    const menuKeys = Object.keys(menus);

    for (let i = 0; i < menuKeys.length; i += 1) {
      result += '<div>';
      const jenisMenu = menuKeys[i];
      result += `<h3>${capitalizeWord(jenisMenu)}</h3>`;

      for (let number = 0; number < menus[jenisMenu].length; number += 1) {
        result += `<p>${number + 1}. ${menus[jenisMenu][number].name}</p>`;
      }

      result += '</div>';
    }

    result += '</div>';

    return result;
  },

  _createRestaurantCategories(categories) {
    let result = '<div><h3>Categories</h3>';
    result += '<p>';

    for (let i = 0; i < categories.length; i += 1) {
      if (i === (categories.length - 1)) {
        result += `${categories[i].name}`;
        break;
      }

      result += `${categories[i].name}, `;
    }

    result += '</p>';
    result += '</div>';

    return result;
  },

  _createRestaurantDescription(description) {
    return `
    <div>
      <h3>Description</h3>
      <p>${description}</p>
    </div>
    `;
  },

  createFavoriteButton() {
    return `
      <button aria-label="put restaurant to favorite" id="favoriteButton" class="favorites__button">
        Put to Favorites
      </button>
    `;
  },

  createDeleteFavoriteButton() {
    return `
      <button aria-label="delete restaurant from favorite" id="favoriteButton" class="favorites__button favorited">
        Favorited
      </button>
    `;
  },
};

export default TemplateCreator;
