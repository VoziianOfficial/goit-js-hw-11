import pixApi from './js/pixabay-api.js';
import renderImages from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.querySelector('#search-form');
const input = document.querySelector('#search-input');
const loader = document.querySelector('#loader');
const list = document.querySelector('#gallery');

form.addEventListener('submit', e => {
  e.preventDefault();

  const search = input.value.trim();
  if (!search) {
    iziToast.show({
      title: '❌',
      message: 'Please enter a search query.',
      messageColor: 'white',
      backgroundColor: '#E25757',
      position: 'topRight',
    });
    return;
  }

  loader.style.display = 'block';
  list.innerHTML = '';

  pixApi(search)
    .then(data => {
      const result = data.hits;
      if (result.length > 0) {
        renderImages(result, list);
      } else {
        iziToast.show({
          title: '❌',
          message: 'Sorry, there are no images matching your search query. Please try again!',
          messageColor: 'white',
          backgroundColor: '#E25757',
          position: 'topRight',
        });
      }
    })
    .catch(error => {
      console.error('Error fetching images', error);
      iziToast.show({
        title: '❌',
        message: 'Sorry, check your internet connection!',
        messageColor: 'white',
        backgroundColor: '#E25757',
        position: 'topRight',
        timeout: 5000,
      });
    })
    .finally(() => {
      loader.style.display = 'none';
      e.target.reset();
    });
});
