export const loadContact = () => {
  const mainContent = document.getElementById('main-content');
  const contactTag = document.createElement('section');
  contactTag.classList.add('section');
  contactTag.classList.add('section--contact');

  const template = `This is the contact page`;
  contactTag.innerHTML = template;

  mainContent.appendChild(contactTag);
};
