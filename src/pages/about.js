export const loadAbout = () => {
  const mainContent = document.getElementById('main-content');
  const aboutTag = document.createElement('section');
  // aboutTag.classList.add('section');
  // aboutTag.classList.add('section--about');

  const template = `
    <article class="article article--about">
      <h1 class="article__title">Discover the Essense of Italy at Prima PIatti</h1>
      <p class="text">Welcome to Prima Piatti, your gateway to the vibrant flavors and rich traditions of Italian cuisine. Located in the heart of New York City, our restaurant is a culinary destination where you can experience the true essence of Italy.</p>
      <p class="text">Our dedicated team of chefs, led by Executive Chef Luca Rossi, brings passion and expertise to every dish they create. Using authentic recipes, quality ingredients, and time-honored techniques, we craft a menu that embodies the very best of Italian gastronomy.</p>
      <p class="text">Indulge in our mouthwatering antipasti, such as Bruschetta al Pomodoro and Arancini, tantalizing your taste buds with each bite. Immerse yourself in the comforting allure of our handmade pasta dishes, from classic Spaghetti Carbonara to flavorful Linguine alle Vongole.</p>
      <p class="text">For the main course, savor the richness of Pollo alla Marsala or delight in the succulent Bistecca alla Fiorentina. Complete your culinary journey with our irresistible desserts like Tiramisu and Panna Cotta, ensuring a sweet finale to your dining experience.</p>
      <p class="text">At Prima Piatti, we believe in creating a warm and welcoming atmosphere. Our attentive staff is dedicated to providing you with impeccable service, ensuring your visit is truly memorable.</p>
      <p class="text">Whether you're celebrating a special occasion or seeking an authentic taste of Italy, Prima Piatti invites you to savor the flavors, embrace the ambiance, and create lasting memories.</p>
      <p class="text">Join us and let us transport you to the heart of Italy. Buon appetito!</p>
    </article>
  `;

  aboutTag.classList.add('section');
  aboutTag.classList.add('section--contact');

  aboutTag.innerHTML = template;

  mainContent.appendChild(aboutTag);
};
