// import MovieService from '../js/movie-service';
// const movieService = new MovieService();
// const list = document.querySelector('.movies-card');

export default function renderCardTemplate(data) {
  const { id, title, poster_path, release_date, vote_average, genre_ids } =
    data;

  return `<li class="movies-card__item">
          <a
            href="#"
            class="movies-card__link"
            data-modal-open
            data-card-id="${id}"
          >
            <div class="movies-card__thumb">
              <img
                src="https://image.tmdb.org/t/p/w500/${poster_path}"
                alt="${title}"
                loading="lazy"
              />
            </div>
            <div class="movies-card__content">
              <h2 class="movies-card__heading">${title}</h2>
              <p class="movies-card__text">
                ${genre_ids} | ${release_date}
                <span class="movies-card__rating">${vote_average}</span>
              </p>
            </div>
          </a>
        </li>`;
}
