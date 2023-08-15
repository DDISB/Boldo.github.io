'use sctirct'

document.querySelector('.menu-burger').addEventListener('click', function() {
  document.querySelector('.menu-burger').classList.toggle('active');
  document.body.classList.toggle('lock');
  document.querySelector('.nav__container').classList.toggle('active');  
})

let offset = 0;
const slider = document.querySelector('.container-4__wrapper__list');

document.querySelector('.container-4_right-arrow').addEventListener('click', function() {
  offset += 372;
  if (offset >= 1400) {
    offset = 0;
  }
  slider.style.left = -offset + 'px';
})

document.querySelector('.container-4_left-arrow').addEventListener('click', function() {
  offset += -372;
  if (offset < 0) {
    offset = 1116;
  }
  slider.style.left = -offset + 'px';
})