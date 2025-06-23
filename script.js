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




