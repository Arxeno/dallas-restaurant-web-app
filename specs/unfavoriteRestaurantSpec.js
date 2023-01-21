import FavoriteButtonInitiator from '../src/scripts/utils/favorite-button-initiator';
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';

const addFavoriteButtonContainer = () => {
  document.body.innerHTML = '<div id="favoriteButtonContainer"></div>';
};

describe('Unfavoriting A Restaurant', () => {
  beforeEach(async () => {
    addFavoriteButtonContainer();
    await FavoriteRestaurantIdb.putRestaurant({ id: 1 });

    await FavoriteButtonInitiator.init({
      buttonContainer: document.querySelector('#favoriteButtonContainer'),
      restaurant: {
        id: 1,
      },
    });
  });

  it('should display unfavorite widget when the restaurant has been favorited', async () => {
    expect(document.querySelector('[aria-label="delete restaurant from favorite"]')).toBeTruthy();

    await FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should not display favorite widget when the restaurant has been favorited', async () => {
    expect(document.querySelector('[aria-label="put restaurant to favorite"]')).toBeFalsy();

    await FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should be able to remove favorited restaurant from the list', async () => {
    document.querySelector('[aria-label="delete restaurant from favorite"]').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);

    await FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should not throw error if the unfavorited restaurant is not in the list', async () => {
    await FavoriteRestaurantIdb.deleteRestaurant(1);

    document.querySelector('[aria-label="delete restaurant from favorite"]').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});
