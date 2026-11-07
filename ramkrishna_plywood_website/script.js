// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const navUl = document.querySelector('nav ul');

  if (menuBtn && navUl) {
    menuBtn.addEventListener('click', () => {
      navUl.classList.toggle('show');
    });
  }

  // Contact Form Handling
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for your enquiry! Bilas Das / Ramkrishna Plywood team will contact you shortly.');
      contactForm.reset();
    });
  }
});
