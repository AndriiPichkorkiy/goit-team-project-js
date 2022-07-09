import sayGenres from './genresById';

export default function renderCardTemplate(data) {
  const { id, title, poster_path, release_date, vote_average, genre_ids } =
    data;
  const avarage = vote_average.toFixed(1);
  const releaseYear = release_date.slice(0, 4);
  const genre = sayGenres(genre_ids);

  console.log(data);
  return `<li class="movies-card__item" data-card-id="${id}">
            <div class="movies-card__thumb">
              <img
              
                src="https://image.tmdb.org/t/p/w500/${poster_path}"
                onError="this.onerror=null;this.src='https://subscribenow.com.au/time/asia/Solo/Content/Images/noCover.gif';"
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
          </li>`;
}
