'use sctirct'

document.querySelector('.menu-burger').addEventListener('click', function() {
  document.querySelector('.menu-burger').classList.toggle('active');
  document.body.classList.toggle('lock');
  document.querySelector('.nav__container').classList.toggle('active');  
})