/*=============== ADD BLUR HEADER ===============*/
const blurHeader = () => {
  const header = document.getElementById('header');
  this.scrollY >= 50
    ? header.classList.add('blur-header')
    : header.classList.remove('blur-header');
};
window.addEventListener('scroll', blurHeader);

/*=============== SEARCHING IMAGES ===============*/
const inputEl = document.querySelector('#header-input');
const formEl = document.querySelector('#header-form');
const cards = document.querySelector('#cards');
const accessKey = 'pmlft7NqH_BaXn3F-HORWKGWRTYzoQT2x-UGVnuTnHE';

document.addEventListener('DOMContentLoaded', () => {
  if (inputEl) {
    inputEl.focus();
  }
});

let keyword = '';

async function searchImages() {
  keyword = inputEl.value;
  if (!keyword) {
    keyword = 'water';
  }
  const url = `https://api.unsplash.com/search/photos?query=${keyword}&per_page=24&orientation=landscape&client_id=${accessKey}`;
  const response = await fetch(url);
  const data = await response.json();

  cards.innerHTML = '';

  const results = data.results;

  results.map((result) => {
    const card = document.createElement('div');
    card.classList.add('card');
    const image = document.createElement('img');
    image.src = result.urls.small;
    image.classList.add('card__img');
    card.append(image);
    cards.append(card);
  });
}

formEl.addEventListener('submit', (e) => {
  e.preventDefault();
  page = 1;
  searchImages();
});

window.onload = () => {
  searchImages();
};