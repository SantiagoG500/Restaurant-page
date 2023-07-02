import { MENU_CONTENT } from '../menu_content';

export const loadMenu = () => {
  // for (const menuCategory of MENU_CONTENT) {
  //   loadMenuDishes(menuCategory)
  // }

  const mainContent = document.getElementById('main-content');
  const menuTag = document.createElement('section');
  menuTag.classList.add('section');
  menuTag.classList.add('section--menu');
  const template = `
  <article class="article article--menu">
  <h2 class="title">Check our menu!</h2>

  <section class="menu" id="menu">
  </section>
  
  </article>
  `;
  menuTag.innerHTML = template;

  mainContent.appendChild(menuTag);
  loadMenuCategories(MENU_CONTENT);
};

const loadMenuCategories = (menuContent) => {
  const menu = document.getElementById('menu');
  const fragment = document.createDocumentFragment();

  for (const menuCategory of menuContent) {
    const { category, dishes } = menuCategory;
    const categoryTag = document.createElement('section');
    categoryTag.classList.add('menu__category');

    const template = `
      <h3 class="title">${category}</h3>
      <div class="text text--dishes" id="${category}"></div>
    `;
    categoryTag.innerHTML = template;
    fragment.appendChild(categoryTag);

    const dishesTag = fragment.getElementById(category);
    loadDishes(dishesTag, dishes);
  }
  menu.appendChild(fragment);
};
const loadDishes = (dishesTag, dishes) => {
  const fragment = document.createDocumentFragment();

  for (const item of dishes) {
    const dishTag = document.createElement('section');
    dishTag.classList.add('menu__dish');

    const { dish, description, link } = item;
    // console.log(link);
    const template = `
      <h3 class="title title--menu">${dish}</h3>
      <p class="text text--dish">${description}</p>
    `;
    dishTag.innerHTML = template;

    fragment.appendChild(dishTag);
  }

  dishesTag.appendChild(fragment);
};
const loadDish = () => {};
