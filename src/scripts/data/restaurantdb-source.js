import API_ENDPOINT from '../global/api-endpoint';

class RestaurantDBSource {
  static async nowAvailable() {
    const response = await fetch(API_ENDPOINT.NOW_AVAILABLE);
    const responseJson = await response.json();
    console.log(responseJson.restaurants);
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson;
  }
}

export default RestaurantDBSource;
