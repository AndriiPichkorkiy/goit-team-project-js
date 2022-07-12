import { result } from 'lodash';
import vectorSvg from '../images/icons.svg';
import { movieService } from './movie-service';
import renderCardTemplate from './card-templete';
import { addEventsOnModalBtn } from './localStorage';
import addEventsOnModalBtnTrailer from './trailer';

const refs = {
  filmModal: document.querySelector('.modal-film'),
  closeModalFilm: document.querySelector('.modal-film-close__btn'),
  backdropFilmModal: document.querySelector('.js-backdrop-film-modal'),
  filmCardTemplate: document.querySelector('.movies-card'),
};

refs.backdropFilmModal.addEventListener('click', onBackDropClick);
refs.filmCardTemplate.addEventListener('click', onOpenFilmModal);

function onOpenFilmModal() {
  window.addEventListener('keydown', onEscKeyPress);
  event.preventDefault();
  const id = event.target.parentNode.parentNode.dataset.cardId;

  if (!id) return;
  document.body.classList.add('show-modal');
  onClickFilm(+id);
}

function onCloseModal() {
  window.removeEventListener('keydown', onEscKeyPress);
  document.body.classList.remove('show-modal');
  refs.filmModal.innerHTML = "";
}

function onEscKeyPress(event) {
  const ESC_KEY_CODE = 'Escape'
  if (event.code === ESC_KEY_CODE) {
    onCloseModal()
  }
};

function onBackDropClick(event) {
  if (event.currentTarget === event.target) {
    onCloseModal();
  }
}

export default async function onClickFilm(id) {
  const answer = await movieService.getOneMovie(id).then(movie => {
    const { original_title, id, title, poster_path, release_date, vote_average, vote_count, popularity, overview, genres, tags, videos } = movie;
    const genre = Object.values(genres);

    let genreValue = [];
    let genreId = [];
    for (const value of genre) {
      genreValue.push(value.name);
      genreId.push(value.id);
    }
    const markup = `<div class="film-card"
            data-id = '${id}'
            data-title = '${title}'
            data-poster_path = '${poster_path}'
            data-release_date="${release_date}"
            data-vote_average = '${vote_average}'
            data-genre = '${genreId}'
            >
               <button type="button" class="modal-film-close__btn" data-action="close-modal" data-id="modalFilmCloseBtn">
            <svg class="modal-film__vector" width="18" height="18">
                <use href="${vectorSvg}#icon-close"></use>
            </svg>
        </button>
            <div class="film-info-container">
                <div class="btn-wrapper-trailer">
  <button type="button" class="btn-trailer" data-id="trailerBtn">
    <div class="btn-trailer-overlay-text">
      <h3 class="btn-trailer-text">Watch Trailer</h3>
    </div>
  </button>
  <img loading="lazy"
    class="film-poster-img"
    src="https://image.tmdb.org/t/p/w500/${poster_path}"
    onError="this.onerror=null;this.src='https://subscribenow.com.au/time/asia/Solo/Content/Images/noCover.gif';"
    alt="${tags}"
    loading="lazy"
  /></div>
            <div class="value-films">
            <h2 class="name-film">${original_title}</h2>
            <table>
            <tbody><tr><td class="info-film"">Vote / Votes</td><td class="info-value"><span class="vote">${vote_average.toFixed(1)}
            </span> / <span class="vote-count">${vote_count}</span> </td></tr>
            <tbody><tr><td class="info-film"">Popularity</td><td class="info-value">${
              popularity
            }</td></tr>
            <tbody><tr><td class="info-film"">Original Title</td><td class="info-value original-title">${
              original_title
            }</td></tr>
            <tbody><tr><td class="info-film"">Genre</td><td class="info-value genres-film">${genreValue.join(
              ', '
            )}</td></tr>
                </table>
            <h3 class="about-film-title">about</h3>
            <p><span class="about-film-text">${overview}</span></p>
            <div class="modal-btn-wrapper">
            <button type="button" class="film-modal-btn add-to-watched">add to watched</button>
            <button type="button" class="film-modal-btn add-to-queue">add to queue</button>
            </div>
            </div>
            </div>
            </div>`;
    refs.filmModal.innerHTML = markup;
    refs.closeModalFilm = document.querySelector('.modal-film-close__btn');
    refs.closeModalFilm.addEventListener('click', onCloseModal);
    addEventsOnModalBtn();
    addEventsOnModalBtnTrailer(videos);
  });
}
