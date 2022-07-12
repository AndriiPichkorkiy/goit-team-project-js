import refs from './refs';
import { fetchPopularMovies } from './pagination';
import { movieService } from './movie-service';

const filterButtons = document.querySelector('.movies-filter__list');

filterButtons.addEventListener('click', onFilterButtonClick);

function onFilterButtonClick(event) {
  if (event.target.dataset.id === 'popular') {
    console.log('popular');
    fetchPopularMovies();
    return;
  }
  if (event.target.dataset.id === 'future') {
    console.log('future');
    return;
  }
  if (event.target.dataset.id === 'rating') {
    console.log('rating');
    return;
  }
}

// function fetchFutureFilms() {
//     refs.moviesCard.innerHTML = '';
//     const data = await movieService.getSearchQuery(
//       movieService.query,
//       movieService.page
//     );

//     if (data.total_pages === 1) {
//       pagination.innerHTML = '';
//       return;
//     }

//     renderCollection(data.results);

//     renderPagination(movieService.totalPage, movieService.page);
// }
