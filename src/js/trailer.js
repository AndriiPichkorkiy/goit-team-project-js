import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

let buttonTrailer;

export default function addEventsOnModalBtnTrailer(el) {
  const videos = el.results;
  console.log('-------функція watchMovie--------');
  buttonTrailer = document.querySelector('.btn-trailer');

  buttonTrailer.addEventListener('click', () => {
    watchToTrailer(videos);
  });
}

function watchToTrailer(videos) {
  console.log("You click to button 'Watch movie'!");
  console.log('videos: ', videos);
  const video = videos.find(el => {
    return el.site === 'YouTube';
  });

  const key = video.key;
  console.log(key);

  const instance = basicLightbox.create(`
    <iframe src="https://www.youtube.com/embed/${key}" width="560" height="315" frameborder="0"></iframe>
`);
  instance.show();
  modalClBtTrailer();

  if (!video) {
    return alert('not video');
  }
}

function modalClBtTrailer(instance) {
  const modalBox = document.querySelector('.basicLightbox--iframe');
  modalBox.insertAdjacentHTML(
    'afterbegin',
    `<button
        type="button"
        class="lightbox__button"
        data-action="close-lightbox"
        ></button>
    `
  );
}
