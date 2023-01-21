import FavoriteButtonInitiator from '../src/scripts/utils/favorite-button-initiator';
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';

describe('Unfavoriting A Restaurant', () => {
  it('should display unfavorite widget when the restaurant has been favorited', async () => {
    document.body.innerHTML = '<div id="favoriteButtonContainer"></div>';

    FavoriteRestaurantIdb.putRestaurant({ id: 1 });

    await FavoriteButtonInitiator.init({
      buttonContainer: document.querySelector('#favoriteButtonContainer'),
      restaurant: {
        id: 1,
      },
    });

    expect(document.querySelector('[aria-label="delete restaurant from favorite"]')).toBeTruthy();

    FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should not display favorite widget when the restaurant has been favorited', async () => {
    document.body.innerHTML = '<div id="favoriteButtonContainer"></div>';

    FavoriteRestaurantIdb.putRestaurant({ id: 1 });

    await FavoriteButtonInitiator.init({
      buttonContainer: document.querySelector('#favoriteButtonContainer'),
      restaurant: {
        id: 1,
      },
    });

    expect(document.querySelector('[aria-label="put restaurant to favorite"]')).toBeFalsy();

    FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should be able to remove favorited restaurant from the list', async () => {
    document.body.innerHTML = '<div id="favoriteButtonContainer"></div>';

    FavoriteRestaurantIdb.putRestaurant({ id: 1 });

    await FavoriteButtonInitiator.init({
      buttonContainer: document.querySelector('#favoriteButtonContainer'),
      restaurant: {
        id: 1,
      },
    });

    document.querySelector('[aria-label="delete restaurant from favorite"]').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);

    FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should not throw error if the unfavorited restaurant is not in the list', async () => {});
});
