'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsopenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  overlay.classList.remove('hidden');
  modal.classList.remove('hidden');
};

const closeModal = function () {
  overlay.classList.add('hidden');
  modal.classList.add('hidden');
};

for (let i = 0; i < btnsopenModal.length; i++) {
  btnsopenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  // console.log(e.key)
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
