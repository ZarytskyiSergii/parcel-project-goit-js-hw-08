import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items.js';

// Change code below this line
const gallery = document.querySelector('.gallery');

gallery.innerHTML = galleryItems.map(({ preview, original, description }) => {
    return `
    <li>
    <a class='gallery__item' href="${original}">
    <img class="gallery__image" src="${preview}" alt="$description" />
    </a></li>`;
})
    .join("");

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelaay: 250,
    })

console.log(galleryItems);