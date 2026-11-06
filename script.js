// ---------- Настройки ----------
// Сюда вставить ссылку на виджет YClients (даст заказчик):
const YCLIENTS_URL = '';

// Сюда вставить адрес видео для фона (когда выберете ролик):
const VIDEO_URL = '';

// ---------- Подключаем YClients ----------
if (YCLIENTS_URL) {
  document.querySelectorAll('.yclients-link').forEach(link => {
    link.href = YCLIENTS_URL;
  });
}

// ---------- Запасной фон ----------
function imgFallback(img) {
  img.style.background = 'linear-gradient(135deg, #3a2c1d, #12100e)';
  img.style.minHeight = '200px';
  img.removeAttribute('src');
}

// ---------- Видео-фон: если ролика нет, показываем фото-плакат ----------
const heroVideo = document.querySelector('.hero-video');
if (heroVideo && !VIDEO_URL) {
  heroVideo.removeAttribute('src');
  heroVideo.load();
}

// ---------- Прелоадер ----------
const preloader = document.getElementById('preloader');

function hidePreloader() {
  preloader.classList.add('done');
}

window.addEventListener('load', () => {
  setTimeout(hidePreloader, 400);
});

// Страховка: если что-то грузится слишком долго, прячем прелоадер принудительно
setTimeout(hidePreloader, 2500);


// ---------- Бургер-меню ----------
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  nav.classList.toggle('open');
});

nav.querySelectorAll('a').forEach(link =>
  link.addEventListener('click', () => {
    burger.classList.remove('open');
    nav.classList.remove('open');
  })
);

// ---------- Появление блоков при прокрутке ----------
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ---------- Кнопка наверх ----------
const toTop = document.getElementById('toTop');

window.addEventListener('scroll', () => {
  toTop.classList.toggle('show', window.scrollY > 500);
});

toTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
