export const loadHeader = () => {
  const headerTag = document.createElement('header');
  const headerTemplate = `
    <p class="text">Prima Piatti</p>
    <ul class="main-menu" id="main-menu">
      <li class="text main-menu__li" data-page="Home">Home</li>
      <li class="text main-menu__li" data-page="About">About</li>
      </ul>
      `;
  headerTag.innerHTML = headerTemplate;
  headerTag.classList.add('main-header');

  document.getElementById('main-container').appendChild(headerTag);
};

// <li class="text main-menu__li" data-page="Menu">Menu</li>
