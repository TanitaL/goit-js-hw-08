import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';

const galleryContainer = document.querySelector('.gallery');

galleryContainer.addEventListener('click', showBigImg);

const gallery = galleryItems.map(item => {
    return `
      <div class="gallery__item">
        <a class="gallery__link" href="${item.original}">
          <img
            class="gallery__image"
            src="${item.preview}"
            data-source="${item.original}"
            alt="${item.description}"
          />
        </a>
      </div>
    `
  }).join('');

galleryContainer.insertAdjacentHTML("beforeend", gallery)

function showBigImg (event) {
    event.preventDefault();
    if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  const lightbox = new SimpleLightbox(".gallery a", { captionsData: "alt", captionDelay: 250 });
};

galleryContainer.addEventListener('keydown', event => {
    if (event.code === 'Escape') {
    instance.close();
    }
})

