import refs from '../js/refs';
import templeteCard from './card-templete';
import { movieService } from '../js/movie-service';

// const movieService = new MovieService();

//-------- Рендер популярних фільмів -----------------------------
movieService
  .getPopularMovies()
  .then(data => data.results.map(data => renderCollection(data)));

function renderCollection(data) {
  const card = templeteCard(data);

  refs.moviesCard.insertAdjacentHTML('beforeend', card);
}
//----------------------------------------------------------------
