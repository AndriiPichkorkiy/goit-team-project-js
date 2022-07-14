import refs from './refs';
// import { fetchPopularMovies } from './pagination';
import { movieService } from './movie-service';
import { renderCollection } from './render-movies';
import { renderPagination, pagination, root } from './pagination';
import { showNotificashka } from './search-form';
const resetedPage = 1;
const filterButtonsEl = document.querySelector('.movies-filter__list');
filterButtonsEl.addEventListener('click', onFilterButtonClick);

const mostPopularBtnEl = document.querySelector('[data-id="popular"]');
const byRatingBtnEL = document.querySelector('[data-id="rating"]');
const comingSoonBtnEl = document.querySelector('[data-id="future"]');

async function onFilterButtonClick(event) {
  movieService.page = resetedPage;
  let data;

  link = `?query=${event.target.dataset?.id || 'popular'}&` + 'page=1';
  history.pushState({ page: 1 }, 'title 1', link);

  if (
    event.target.dataset.id === 'popular' &&
    event.target.nodeName === 'BUTTON'
  ) {
    data = await movieService.getPopularMovies(movieService.page);

    mostPopularBtnEl.classList.add('movies-filter__button--current');
    comingSoonBtnEl.classList.remove('movies-filter__button--current');
    byRatingBtnEL.classList.remove('movies-filter__button--current');
    if (data.total_pages === 1) {
      pagination.innerHTML = '';
      return;
    }
    if (movieService.isnotification) {
      showNotificashka('totalResults', movieService.totalResults);
    }
    renderCollection(data.results);
  }

  if (
    event.target.dataset.id === 'future' &&
    event.target.nodeName === 'BUTTON'
  ) {
    data = await movieService.getUpcoming(movieService.page);

    comingSoonBtnEl.classList.add('movies-filter__button--current');
    mostPopularBtnEl.classList.remove('movies-filter__button--current');
    byRatingBtnEL.classList.remove('movies-filter__button--current');
    if (data.total_pages === 1) {
      pagination.innerHTML = '';
      return;
    }
    if (movieService.isnotification) {
      showNotificashka('totalResults', movieService.totalResults);
    }
    renderCollection(data.results);
  }

  if (
    event.target.dataset.id === 'rating' &&
    event.target.nodeName === 'BUTTON'
  ) {
    data = await movieService.getTopRated(movieService.page);

    byRatingBtnEL.classList.add('movies-filter__button--current');
    mostPopularBtnEl.classList.remove('movies-filter__button--current');
    comingSoonBtnEl.classList.remove('movies-filter__button--current');
    if (data.total_pages === 1) {
      pagination.innerHTML = '';
      return;
    }
    if (movieService.isnotification) {
      showNotificashka('totalResults', movieService.totalResults);
    }
    renderCollection(data.results);
  }
  renderPagination(movieService.totalPage, movieService.page);
}

export function hideFilters() {
  filterButtonsEl.classList.add('visually-hidden');
}

export function showFilters() {
  filterButtonsEl.classList.remove('visually-hidden');
}

export function deactivateButtons() {
  mostPopularBtnEl.classList.remove('movies-filter__button--current');
  byRatingBtnEL.classList.remove('movies-filter__button--current');
  comingSoonBtnEl.classList.remove('movies-filter__button--current');
}
