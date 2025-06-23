// Toggle contact info visibility
const contactLink = document.getElementById('contact-link');
const contactInfo = document.getElementById('contact-info');

contactLink.addEventListener('click', () => {
  if (contactInfo.style.display === 'block') {
    contactInfo.style.display = 'none';
  } else {
    contactInfo.style.display = 'block';
  }
});
