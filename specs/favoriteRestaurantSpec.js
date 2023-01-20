import FavoriteButtonInitiator from '../src/scripts/utils/favorite-button-initiator';

describe('Favoriting A Restaurant', () => {
  it('should show the favorite button when the restaurant has not been favorited before', async () => {
    document.body.innerHTML = '<div id="favoriteButtonContainer"></div>';

    await FavoriteButtonInitiator.init({
      buttonContainer: document.querySelector('#favoriteButtonContainer'),
      restaurant: {
        id: 1,
      },
    });

    expect(document.querySelector('[aria-label="put restaurant to favorite"]')).toBeTruthy();
  });

  it('should not show the unfavorite button when the restaurant has not been favorited before', async () => {
    document.body.innerHTML = '<div id="favoriteButtonContainer"></div>';

    await FavoriteButtonInitiator.init({
      buttonContainer: document.querySelector('#favoriteButtonContainer'),
      restaurant: {
        id: 1,
      },
    });

    expect(document.querySelector('[aria-label="delete restaurant from favorite"]')).toBeFalsy();
  });

  it('should be able to favorite the restaurant', async () => {});

  it('should not add a restaurant again when its already favorited', async () => {});

  it('should not add a restaurant when it has no id', async () => {});
});
