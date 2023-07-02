export const loadcontentContainer = () => {
  const contentTag = document.createElement('main');
  contentTag.classList.add('main-content');
  contentTag.classList.add('main-content--loaded');
  contentTag.id = 'main-content';

  document.getElementById('main-container').appendChild(contentTag);
};
