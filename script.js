const lines = document.querySelectorAll(".first_screen_actionline");
const images = document.querySelectorAll(".first_img_item");

lines.forEach((line) => {
  line.addEventListener("mouseenter", () => {
    const imgName = line.dataset.img;

    images.forEach((img) => {
      if (img.dataset.img === imgName) {
        img.classList.add("active");
      } else {
        img.classList.remove("active");
      }
    });

    lines.forEach((l) => l.classList.remove("active"));
    line.classList.add("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelectorAll(".left_screen__acorditem .accord_title")
    .forEach((title) => {
      title.addEventListener("click", () => {
        const item = title.closest(".left_screen__acorditem");
        const isActive = item.classList.contains("active");

        // Закрываем все элементы
        document.querySelectorAll(".left_screen__acorditem").forEach((el) => {
          el.classList.remove("active");
        });

        // Открываем текущий, если он не был активен
        if (!isActive) {
          item.classList.add("active");
        }
      });
    });
});

document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".my-swiper", {
    // Базовые настройки
    loop: false,
    initialSlide: 0,
    speed: 500,

    // Отключаем стандартные стили Swiper
    injectStyles: false,

    // Кастомная навигация
    navigation: {
      nextEl: ".custom-next",
      prevEl: ".custom-prev",
    },

    // Дополнительные параметры по желанию:
    slidesPerView: "auto",
    spaceBetween: 30,
    autoHeight: false, // Отключаем авто-высоту Swiper
    observer: true, // Наблюдаем за изменениями контента
    observeParents: true,
  });
});
function equalizeHeights() {
  const slides = document.querySelectorAll(".swiper-slide");
  let maxHeight = 0;

  // Сначала сбросим высоту для перерасчёта
  slides.forEach((slide) => (slide.style.height = "auto"));

  // Находим максимальную высоту
  slides.forEach((slide) => {
    maxHeight = Math.max(maxHeight, slide.offsetHeight);
  });

  // Устанавливаем единую высоту
  slides.forEach((slide) => {
    slide.style.height = `${maxHeight}px`;
  });
}



document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".my-swiper2", {
    // Базовые настройки
    loop: false,
    initialSlide: 0,
    speed: 500,

    // Отключаем стандартные стили Swiper
    injectStyles: false,

    // Кастомная навигация
    navigation: {
      nextEl: ".custom-next2",
      prevEl: ".custom-prev2",
    },

    // Дополнительные параметры по желанию:
    slidesPerView: "auto",
    spaceBetween: 30,
    autoHeight: false, // Отключаем авто-высоту Swiper
    observer: true, // Наблюдаем за изменениями контента
    observeParents: true,
  });
});
function equalizeHeights() {
  const slides = document.querySelectorAll(".swiper-slide");
  let maxHeight = 0;

  // Сначала сбросим высоту для перерасчёта
  slides.forEach((slide) => (slide.style.height = "auto"));

  // Находим максимальную высоту
  slides.forEach((slide) => {
    maxHeight = Math.max(maxHeight, slide.offsetHeight);
  });

  // Устанавливаем единую высоту
  slides.forEach((slide) => {
    slide.style.height = `${maxHeight}px`;
  });
}



document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".my-swiper3", {
    // Базовые настройки
    loop: false,
    initialSlide: 0,
    speed: 500,

    // Отключаем стандартные стили Swiper
    injectStyles: false,

    // Кастомная навигация
    navigation: {
      nextEl: ".custom-next3",
      prevEl: ".custom-prev3",
    },

    // Дополнительные параметры по желанию:
    slidesPerView: "auto",
    spaceBetween: 30,
    autoHeight: false, // Отключаем авто-высоту Swiper
    observer: true, // Наблюдаем за изменениями контента
    observeParents: true,
  });
});
function equalizeHeights() {
  const slides = document.querySelectorAll(".swiper-slide");
  let maxHeight = 0;

  // Сначала сбросим высоту для перерасчёта
  slides.forEach((slide) => (slide.style.height = "auto"));

  // Находим максимальную высоту
  slides.forEach((slide) => {
    maxHeight = Math.max(maxHeight, slide.offsetHeight);
  });

  // Устанавливаем единую высоту
  slides.forEach((slide) => {
    slide.style.height = `${maxHeight}px`;
  });
}



function applyGradientMask() {
  const block1 = document.querySelector('.animata_bg_overflove');
  const block2 = document.querySelector('.anim');

  // Получаем координаты блоков
  const rect1 = block1.getBoundingClientRect();
  const rect2 = block2.getBoundingClientRect();

  // Если блоки пересекаются
  if (rect1.bottom > rect2.top) {
    // Вычисляем высоту перекрытия
    const overlapHeight = rect1.bottom - rect2.top;

    // Применяем маску к block2 (верхняя часть становится прозрачной)
    block2.style.maskImage = `linear-gradient(to bottom, transparent 0%, black ${overlapHeight}px, black 100%)`;
    block2.style.webkitMaskImage = block2.style.maskImage; // Для Safari
  } else {
    // Если блоки не пересекаются, убираем маску
    block2.style.maskImage = 'none';
    block2.style.webkitMaskImage = 'none';
  }
}

// Вызываем при загрузке и при скролле/ресайзе
window.addEventListener('load', applyGradientMask);
window.addEventListener('scroll', applyGradientMask);
window.addEventListener('resize', applyGradientMask);