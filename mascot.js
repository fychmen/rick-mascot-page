const root = document.querySelector('#mascot');
const sprite = root.querySelector('.sprite');
let timer;

root.addEventListener('pointermove', (event) => {
  const box = root.getBoundingClientRect();
  const x = (event.clientX - (box.left + box.width / 2)) / (box.width / 2);
  const y = (event.clientY - (box.top + box.height / 2)) / (box.height / 2);
  const col = x < -0.33 ? 0 : x > 0.33 ? 2 : 1;
  const row = y < -0.33 ? 0 : y > 0.33 ? 2 : 1;
  sprite.style.backgroundPosition = `${col * 50}% ${row * 50}%`;
});

root.addEventListener('pointerleave', () => {
  sprite.style.backgroundPosition = '50% 50%';
});

root.addEventListener('click', () => {
  root.classList.remove('clicked');
  void root.offsetWidth;
  root.classList.add('clicked');
  clearTimeout(timer);
  timer = setTimeout(() => root.classList.remove('clicked'), 900);
});
