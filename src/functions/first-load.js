import { loadHeader } from '../components/header';
import { loadFooter } from '../components/footer';
import { loadcontentContainer } from '../components/content';
import { loadHome } from '../pages/home';
import { loadMenu } from '../pages/menu';

export const firstLoad = () => {
  loadHeader();
  loadcontentContainer();
  loadFooter();
  loadHome();
  // loadMenu();
};
