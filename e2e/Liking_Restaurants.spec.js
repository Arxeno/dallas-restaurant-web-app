const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorites');
});

Scenario('Display empty favorited restaurant', ({ I }) => {
  I.seeElement('#empty-favorite-restaurant');
  I.seeElement('.emptyFavorite');
  I.see('You don\'t have any favorited restaurant', '#empty-favorite-restaurant');
});

Scenario('Favoriting a restaurant', async ({ I }) => {
  I.see('You don\'t have any favorited restaurant', '#empty-favorite-restaurant');
  I.amOnPage('/');

  I.seeElement('#rqdv5juczeskfw1e867 .card-content-container a');
  const firstRestaurantTitle = await I.grabTextFrom(locate('#rqdv5juczeskfw1e867 .card-title').first());
  const firstRestaurant = locate('#rqdv5juczeskfw1e867 .card-content-container a').first();
  I.click(firstRestaurant);

  I.seeElement('#favoriteButtonContainer');

  I.seeElement('#favoriteButtonContainer button');
  I.click(locate('#favoriteButtonContainer button').first());

  I.amOnPage('/#/favorites');

  I.dontSeeElement('#empty-favorite-restaurant');
  I.dontSeeElement('.emptyFavorite');
  I.dontSee('You don\'t have any favorited restaurant');

  I.seeElement('#rqdv5juczeskfw1e867');
  const likedRestaurantTitle = await I.grabTextFrom(locate('#rqdv5juczeskfw1e867 .card-title').first());
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('Unfavoriting a Restaurant', ({ I }) => {
  I.see('You don\'t have any favorited restaurant', '#empty-favorite-restaurant');
  I.amOnPage('/');

  I.seeElement('#rqdv5juczeskfw1e867 .card-content-container a');
  const firstRestaurant = locate('#rqdv5juczeskfw1e867 .card-content-container a').first();
  I.click(firstRestaurant);

  I.seeElement('#favoriteButtonContainer button[aria-label="put restaurant to favorite"]');
  I.click(locate('#favoriteButtonContainer button[aria-label="put restaurant to favorite"]').first());

  I.amOnPage('/#/favorites');

  I.seeElement('#rqdv5juczeskfw1e867 .card-content-container a');
  I.click(firstRestaurant);

  I.seeElement('#favoriteButtonContainer button[aria-label="delete restaurant from favorite"]');
  I.click(locate('#favoriteButtonContainer button[aria-label="delete restaurant from favorite"]').first());

  I.amOnPage('/#/favorites');

  I.see('You don\'t have any favorited restaurant', '#empty-favorite-restaurant');
});
