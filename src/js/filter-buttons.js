import refs from './refs';
// import { fetchPopularMovies } from './pagination';
import { movieService } from './movie-service';
import { renderCollection } from './render-movies';
import { renderPagination, pagination, root } from './pagination';

const resetedPage = 1;
const filterButtonsEl = document.querySelector('.movies-filter__list');
filterButtonsEl.addEventListener('click', onFilterButtonClick);

const mostPopularBtnEl = document.querySelector('[data-id="popular"]');
const byRatingBtnEL = document.querySelector('[data-id="rating"]');
const comingSoonBtnEl = document.querySelector('[data-id="future"]');

async function onFilterButtonClick(event) {
  movieService.page = resetedPage;
  let data;

  if (
    event.target.dataset.id === 'popular' &&
    event.target.nodeName === 'BUTTON'
  ) {
    data = await movieService.getPopularMovies(movieService.page);
    movieService.totalPage = data.total_pages;

    mostPopularBtnEl.classList.add('movies-filter__button--current');
    comingSoonBtnEl.classList.remove('movies-filter__button--current');
    byRatingBtnEL.classList.remove('movies-filter__button--current');
    if (data.total_pages === 1) {
      pagination.innerHTML = '';
      return;
    }
    renderCollection(data.results);

    // console.log('popular', data);
  }

  if (
    event.target.dataset.id === 'future' &&
    event.target.nodeName === 'BUTTON'
  ) {
    data = await movieService.getUpcoming(movieService.page);
    movieService.totalPage = data.total_pages;

    comingSoonBtnEl.classList.add('movies-filter__button--current');
    mostPopularBtnEl.classList.remove('movies-filter__button--current');
    byRatingBtnEL.classList.remove('movies-filter__button--current');
    if (data.total_pages === 1) {
      pagination.innerHTML = '';
      return;
    }
    renderCollection(data.results);

    // console.log('future', data);
  }

  if (
    event.target.dataset.id === 'rating' &&
    event.target.nodeName === 'BUTTON'
  ) {
    data = await movieService.getTopRated(movieService.page);
    movieService.totalPage = data.total_pages;

    byRatingBtnEL.classList.add('movies-filter__button--current');
    mostPopularBtnEl.classList.remove('movies-filter__button--current');
    comingSoonBtnEl.classList.remove('movies-filter__button--current');
    if (data.total_pages === 1) {
      pagination.innerHTML = '';
      return;
    }
    renderCollection(data.results);

    // console.log('rating', data);
  }
  renderPagination(movieService.totalPage, movieService.page);
  // renderCollection(data.results);
  // console.log(movieService.totalPage);
  // console.log(movieService.page);
}
