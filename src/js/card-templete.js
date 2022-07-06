import { movieService } from '../js/movie-service';
// const movieService = new MovieService();
// const list = document.querySelector('.movies-card');
// let qwerty =

const genreNames = movieService.getGenres();
// console.log(genreNames);
// genreNames.then(genres =>
//   genres.forEach(element => {
//     console.log(element.id);
//     console.log(element.name);
//   })
// );

// const asd = movieService.map(element => element);
// console.log(asd);
export default function renderCardTemplate(data) {
  const { id, title, poster_path, release_date, vote_average, genre_ids } =
    data;
  const avarage = vote_average.toFixed(1);
  const releaseYear = parseInt(release_date);
  let genre;
  console.log(genre);
  genreNames.then(genres =>
    genres.forEach(element => {
      if (genre_ids.includes(element.id)) {
        genre = element.name;
        console.log(genre);
      }
    })
  );

  if (genre_ids.length > 3) {
  }

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
                ${genre} | ${releaseYear}
                <span class="movies-card__rating">${avarage}</span>
              </p>
            </div>
          </a>
        </li>`;
}
