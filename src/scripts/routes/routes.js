import Detail from '../views/pages/detail';
import Favorites from '../views/pages/favorites';
import NowAvailable from '../views/pages/now-available';

const routes = {
  '/': NowAvailable,
  '/now-available': NowAvailable,
  '/detail/:id': Detail,
  '/favorites': Favorites,
};

export default routes;
