import { galleryItems } from './gallery-items.js';
// Change code below this line



const galleryContainerEl = document.querySelector('.gallery');
const createGallery = createGalleryItemsMurkup(galleryItems);

galleryContainerEl.insertAdjacentHTML('beforeend', createGallery);

galleryContainerEl.addEventListener('click', onClickContainerGallery)



function createGalleryItemsMurkup(array) {
	return array.map(({preview, original, description}) => {
		return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
	}).join('');
} 

function onClickContainerGallery(evt) {
	evt.preventDefault();

	if (evt.target.nodeName !== "IMG") {
		return;
	}

	const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="1280" heigth="853">
`)
	instance.show();

	galleryContainerEl.addEventListener('keydown', evt => {
		if (evt.code === "Escape") {
			instance.close();
	}
})

	
}


// function visible() {
// 	const visible = basicLightbox.visible();
// 	if (visible) {
// 		document.addEventListener('keydown', evt => {
// 	console.log(evt.key);
// 	if (evt.key === "Escape") {
// 		instance.close()
// 	}
//  })
// 	}
// }






