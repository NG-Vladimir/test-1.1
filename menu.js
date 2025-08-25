// Открытие и закрытие мобильного меню

const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenuBtn = document.querySelector('.close-menu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.add('active');
  document.body.style.overflow = 'hidden'; // Блокируем скролл фона
});

closeMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
  document.body.style.overflow = '';
});

// Чтобы меню закрывалось по клику на ссылку
document.querySelectorAll('.mobile-menu ul li a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    document.body.style.overflow = '';
  });
});