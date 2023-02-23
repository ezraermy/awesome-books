/* eslint-disable no-undef */
const link = document.querySelectorAll('.nav-link');
const booksListSection = document.querySelector('#list-page');
const addBookSection = document.querySelector('#book-form-container');
const contactSection = document.querySelector('#contact');
const sections = [booksListSection, addBookSection, contactSection];
const { DateTime } = luxon;

sections[1].classList.add('d-none');
link[0].addEventListener('click', () => {
  sections[0].classList.remove('d-none');
  sections[1].classList.add('d-none');
  sections[2].classList.add('d-none');
});

link[1].addEventListener('click', () => {
  sections[1].classList.remove('d-none');
  sections[0].classList.add('d-none');
  sections[2].classList.add('d-none');
});

link[2].addEventListener('click', () => {
  sections[2].classList.remove('d-none');
  sections[0].classList.add('d-none');
  sections[1].classList.add('d-none');
});

setInterval(() => { document.getElementById('render-date').innerHTML = `${DateTime.now().toLocaleString(DateTime.DATETIME_MED)}`; }, 1000);