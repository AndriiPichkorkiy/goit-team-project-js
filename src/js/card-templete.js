import MovieService from '../js/movie-service';
const movieService = new MovieService();
const list = document.querySelector('.movies-card');

// let year;
function renderCardTemplate(data) {
  console.log(data);
  const { title, poster_path, release_date } = data;

  card = `<li class="movies-card__item">
          <a
            href="#"
            class="movies-card__link"
            data-modal-open
            data-card-id="тут id фільму"
          >
            <div class="movies-card__thumb">
              <img
                src="https://image.tmdb.org/t/p/w500/${poster_path}"
                alt=""
                loading="lazy"
              />
            </div>
            <div class="movies-card__content">
              <h2 class="movies-card__heading">${title}</h2>
              <p class="movies-card__text">
                Drama, Action | ${release_date}
                <span class="movies-card__rating">9.6</span>
              </p>
            </div>
          </a>
        </li>`;
  console.log(list);
  list.insertAdjacentHTML('beforeend', card);
}

movieService
  .getPopularMovies()
  .then(data => data.results.map(data => renderCardTemplate(data)));
