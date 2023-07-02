import './css/normalize.css';
import './styles.css';
import './css/media-queries.css';

import { firstLoad } from './functions/first-load';
import { loadHome } from './pages/home';
import { loadMenu } from './pages/menu';
// import { loadContact } from './pages/contact';
import { loadAbout } from './pages/about';
import { refreshPage } from './functions/refresh-page';
import { toggleAnimation } from './functions/toggle-animation';

firstLoad();

const changePage = (e) => {
  const mainContent = document.getElementById('main-content');

  const target = e.target;
  const dataset = target.dataset.page;

  if (!dataset) return;

  toggleAnimation(mainContent);
  setTimeout(() => {
    refreshPage();
    if (dataset === 'Home') loadHome();
    if (dataset === 'About') loadAbout();
    if (dataset === 'Menu') loadMenu();
  }, 1000);
};

document.addEventListener('click', changePage);
