import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(`.gallery`);
const cardsMarkup = createGallery(galleryItems);
gallery.insertAdjacentHTML(`beforeend`, cardsMarkup);

 function createGallery(galleryItems) {
    return galleryItems.map(({ preview, original, description }) =>
      `<div class="gallery__item">
            <a class = "gallery__link"
                href= "${original}" 
                onclick = "return false">
            <img  class="gallery__image"
                src="${preview}" 
                alt = "${description}" 
                data-source = "${original}"
            >
            </a>
        </div>`)
    .join("");
};

gallery.addEventListener(`click`, onClickGallery);

function onClickGallery(evt) {
    // console.log(evt.target);
    if (evt.target.nodeName !== "IMG") {
        return;
    }
    const instance = basicLightbox.create(
        `<img src="${evt.target.dataset.source}"
        width="1000" height="800"
        onclick="return false">
        `,
        {
        onShow: (instance) => {
          document.addEventListener("keydown", (evt) => {
            if (evt.code === "Escape") {
              instance.close();
            }
        
          })
          },
        onClose: (instance) => {
          document.removeEventListener("keydown", evt)
        },
      })
        .show(); 
}