
  const lines = document.querySelectorAll('.first_screen_actionline');
  const images = document.querySelectorAll('.first_img_item');

  lines.forEach(line => {
    line.addEventListener('mouseenter', () => {
      const imgName = line.dataset.img;

      images.forEach(img => {
        if (img.dataset.img === imgName) {
          img.classList.add('active');
        } else {
          img.classList.remove('active');
        }
      });

      lines.forEach(l => l.classList.remove('active'));
      line.classList.add('active');
    });
  });
