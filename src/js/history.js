import { renderPagination } from './pagination';
import { movieService } from './movie-service';
import { renderCollection } from './render-movies';
export const currentHistoryPage = getCurrentPage();
import refs from './refs';

window.addEventListener('DOMContentLoaded', init);
window.onpopstate = init;

const mostPopularBtnEl = document.querySelector('[data-id="popular"]');
const byRatingBtnEL = document.querySelector('[data-id="rating"]');
const comingSoonBtnEl = document.querySelector('[data-id="future"]');

export async function init() {
  const currentPage = getCurrentPage();
  const currentQuery = getCurrentQuery();
  if (!currentQuery)
    mostPopularBtnEl.classList.add('movies-filter__button--current');

  if (currentQuery === 'popular') {
    mostPopularBtnEl.classList.add('movies-filter__button--current');
    comingSoonBtnEl.classList.remove('movies-filter__button--current');
    byRatingBtnEL.classList.remove('movies-filter__button--current');
  }
  if (currentQuery === 'rating') {
    byRatingBtnEL.classList.add('movies-filter__button--current');
    mostPopularBtnEl.classList.remove('movies-filter__button--current');
    comingSoonBtnEl.classList.remove('movies-filter__button--current');
  }
  if (currentQuery === 'future') {
    comingSoonBtnEl.classList.add('movies-filter__button--current');
    mostPopularBtnEl.classList.remove('movies-filter__button--current');
    byRatingBtnEL.classList.remove('movies-filter__button--current');
  }
  await movieService.galleryData();
  refs.moviesCard.innerHTML = '';
  let data = await movieService.getSearchQuery(currentQuery, currentPage);

  if (data.total_pages === 1) {
    pagination.innerHTML = '';
    return;
  }
  renderCollection(data.results);
  renderPagination(movieService.totalPage, currentPage);
}
function getCurrentPage() {
  const href = location.href;
  const url = new URL(href);
  const page = url.searchParams.get('page') || 1;
  return +page ?? 1;
}
function getCurrentQuery() {
  const href = location.href;
  const url = new URL(href);
  const page = url.searchParams.get('query') || '';
  return page;
}

export const changeNavigation = page => {
  const href = location.href;
  const url = new URL(href);
  url.searchParams.set('page', page);
  history.pushState({}, '', url.toString());
};
