import FavoriteButtonInitiator from '../src/scripts/utils/favorite-button-initiator';
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';

const addFavoriteButtonContainer = () => {
  document.body.innerHTML = '<div id="favoriteButtonContainer"></div>';
};

describe('Favoriting A Restaurant', () => {
  beforeEach(() => {
    addFavoriteButtonContainer();
  });

  it('should show the favorite button when the restaurant has not been favorited before', async () => {
    await FavoriteButtonInitiator.init({
      buttonContainer: document.querySelector('#favoriteButtonContainer'),
      restaurant: {
        id: 1,
      },
    });

    expect(document.querySelector('[aria-label="put restaurant to favorite"]')).toBeTruthy();
  });

  it('should not show the unfavorite button when the restaurant has not been favorited before', async () => {
    await FavoriteButtonInitiator.init({
      buttonContainer: document.querySelector('#favoriteButtonContainer'),
      restaurant: {
        id: 1,
      },
    });

    expect(document.querySelector('[aria-label="delete restaurant from favorite"]')).toBeFalsy();
  });

  it('should be able to favorite the restaurant', async () => {
    await FavoriteButtonInitiator.init({
      buttonContainer: document.querySelector('#favoriteButtonContainer'),
      restaurant: {
        id: 1,
      },
    });

    document.querySelector('[aria-label="put restaurant to favorite"]').dispatchEvent(new Event('click'));

    const restaurant = await FavoriteRestaurantIdb.getRestaurant(1);
    expect(restaurant).toEqual({ id: 1 });

    FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should not add a restaurant again when its already favorited', async () => {
    await FavoriteButtonInitiator.init({
      buttonContainer: document.querySelector('#favoriteButtonContainer'),
      restaurant: {
        id: 1,
      },
    });

    FavoriteRestaurantIdb.putRestaurant({ id: 1 });

    document.querySelector('[aria-label="put restaurant to favorite"]').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([{ id: 1 }]);

    FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should not add a restaurant when it has no id', async () => {
    await FavoriteButtonInitiator.init({
      buttonContainer: document.querySelector('#favoriteButtonContainer'),
      restaurant: {},
    });

    document.querySelector('[aria-label="put restaurant to favorite"]').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
    expect(document.querySelector('[aria-label="put restaurant to favorite"]')).toBeTruthy();
    expect(document.querySelector('[aria-label="delete restaurant from favorite"]')).toBeFalsy();
  });
});
