const form = document.querySelector('.find-form');
const searchButton = document.querySelector('.call-to-action__button');

form.classList.add('hidden');

searchButton.addEventListener('click', () => {
  form.classList.toggle('hidden');
});
