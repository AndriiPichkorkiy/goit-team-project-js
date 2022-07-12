import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

let buttonTrailer;
let getOpanModal;
let getCloseModal;

export default function addEventsOnModalBtnTrailer(el) {
  const videos = el.results;
  buttonTrailer = document.querySelector('.btn-trailer');
  buttonTrailer.classList.add('is-hidden');
  videos.find(el => {
    if (el.site === 'YouTube') {
      buttonTrailer.classList.remove('is-hidden');
    } else {
      return;
    }
  });
  buttonTrailer.addEventListener('click', () => {
    watchToTrailer(videos);
  });
}

function watchToTrailer(videos) {
  const video = videos.find(el => {
    return el.site === 'YouTube';
  });

  const key = video.key;
  const instance = basicLightbox.create(`
    <iframe src="https://www.youtube.com/embed/${key}" width="" height="" frameborder="0" class = "trailer-size"></iframe>
`);

  getOpanModal = instance.show;
  getCloseModal = instance.close;
  openModalTailer();
}

function onCloseModalForEsc(e) {
  if (e.code === 'Escape') {
    closeModalTailer();
  }
}

function closeModalTailer() {
  window.removeEventListener('keydown', onCloseModalForEsc);
  getCloseModal();
}

function openModalTailer() {
  window.addEventListener('keydown', onCloseModalForEsc);
  getOpanModal();
}
