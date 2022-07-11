import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

let buttonTrailer;

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
    <iframe src="https://www.youtube.com/embed/${key}" width="560" height="315" frameborder="0"></iframe>
`);
  instance.show();
}
