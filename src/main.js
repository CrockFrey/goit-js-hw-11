import SimpleLightbox from 'simplelightbox';
import iziToast from 'izitoast';
import { createGalleryCardTemplate } from './js/render-functions.js';
import { fetchPhotos } from './js/pixabay-api.js';
import icon from '../src/img/icon.svg';

const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');

const onSearchFormSubmit = event => {
  event.preventDefault();

  const searchedValue = searchFormEl.elements.user_query.value.trim();

  if (!searchedValue) {
    iziToast.show({
      timeout: 5000,
      message: 'To search, fill out the form!',
      position: 'topLeft',
      iconUrl: icon,
    });
    galleryEl.innerHTML = '';
    searchFormEl.reset();
    return;
  }

  const loader = document.querySelector('.js-loader');
  loader.classList.remove('is-hidden');

  fetchPhotos(searchedValue)
    .then(imgData => {
      loader.classList.add('is-hidden');

      if (imgData.hits.length === 0) {
        iziToast.show({
          timeout: 5000,
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          iconUrl: icon,
        });
        galleryEl.innerHTML = '';
        return;
      }

      const galleryCardsTemplate = imgData.hits
        .map(imgDetails => createGalleryCardTemplate(imgDetails))
        .join('');

      galleryEl.innerHTML = galleryCardsTemplate;
      lightbox.refresh();
    })
    .catch(err => {
      if (err.message === '404') {
        alert('Incorrectly entered address. Check and try again');
      }
    });

  searchFormEl.reset();
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);

let lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});