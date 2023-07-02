export const toggleAnimation = (container) => {
  container.classList.remove('main-content--loaded');
  container.classList.add('main-content--hidden');
  setTimeout(() => {
    container.classList.remove('main-content--hidden');
    container.classList.add('main-content--loaded');
  }, 1000);
};
