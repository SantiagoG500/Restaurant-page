import '../css/pages.css';
import { loadMenu } from './menu';

export const loadHome = () => {
  const mainContent = document.getElementById('main-content');
  const homeTag = document.createElement('section');
  homeTag.classList.add('section');
  homeTag.classList.add('section--home');
  const template = `

  <article class="article article--home">
    <h2 class="title article__title">  Elevating Italian Flavors, One Dish at a Time! </h2>
    <p class="text">Welcome to Prima Piatti, where the essence of Italian cuisine is celebrated through a delightful array of first plates. Step into our charming and inviting restaurant, where we invite you to embark on a culinary journey inspired by the traditions of Italy. </p>
    <p class="text">Our menu showcases a tantalizing selection of pasta dishes, risottos, and mouthwatering appetizers, meticulously crafted to transport your taste buds to the heart of Italy</p>
    <p class="text">Whether you're seeking a comforting bowl of al dente pasta or savoring the rich flavors of a creamy risotto, Prima Piatti offers a truly authentic dining experience. With our passion for quality ingredients, exceptional flavors, and warm hospitality, we invite you to join us for a memorable dining experience at Prima Piatti, where every dish is a perfect introduction to the richness of Italian cuisine.</p>

    <a href="#" class="text">  You can check our menu here. </a>
    <p class="text">  Come an visit us!!</p>

  </article>

  
  `;
  homeTag.innerHTML = template;

  mainContent.appendChild(homeTag);
  loadMenu();
};
