import { result } from 'lodash';

import { movieService } from './movie-service';
// const movieService = new MovieService;

const refs = {
  filmModal: document.querySelector('.modal-film'),
  closeModalFilm: document.querySelector('.modal-film-close__btn'),
  backdropFilmModal: document.querySelector('.js-backdrop-film-modal'),
};

refs.closeModalFilm.addEventListener('click', onCloseModal);
refs.backdropFilmModal.addEventListener('click', onBackDropClick);

function onCloseModal() {
  document.body.classList.remove('show-modal');
}

function onBackDropClick(event) {
  if (event.currentTarget === event.target) {
    onCloseModal();
  }
}

export default async function onClickFilm(id) {
  const answer = await movieService.getOneMovie(id).then(movie => {
    console.log(movie);
    const markup = `<div class="film-card">
        <div class="film-poster">
            <a href="${movie.poster_path}">
            <img class="film-poster-img" src="${movie.poster_path}" alt="${movie.tags}" loading="lazy" width=375/>
            </div>

            <h2 class="name-film text">${movie.original_title}</h2>
            <p class="info-film">Vote / Votes<span class="info-value">${movie.vote_average}</span></p>
            <p class="info-film">Popularity<span class="info-value">${movie.vote_count}</span></p>
            <p class="info-film">Popularity<span class="info-value">${movie.popularity}</span></p>
            <p class="info-film">Original Title<span class="info-value">${movie.original_title}</span></p>
            <p class="info-film">ABOUT<span class="info-value">${movie.overview}</span></p>

            <button type="button" class="add-to-watched">ADD TO WATCHED</button>
            <button type="button" class="add-to-queue">ADD TO QUEUE</button>
        </div>`;

    refs.filmModal.insertAdjacentHTML('beforeend', markup);
  });
}
// onClickFilm(453395);
