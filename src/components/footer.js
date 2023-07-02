export const loadFooter = () => {
  const footerTag = document.createElement('footer');
  footerTag.classList.add('main-footer');
  footerTag.id = 'main-footer';

  const footerTemplate = `
    <section class="footer-container">
      <h2>Prima Piatti</h2>
    </section>
  `;
  footerTag.innerHTML = footerTemplate;

  document.getElementById('main-container').appendChild(footerTag);
};
