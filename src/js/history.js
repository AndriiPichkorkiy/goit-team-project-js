import { renderPagination } from './pagination';
import { movieService } from './movie-service';
import { renderCollection } from './render-movies';
export const currentHistoryPage = getCurrentPage();
import refs from './refs';

window.addEventListener('DOMContentLoaded', init);
window.onpopstate = init;

export async function init() {
  const currentPage = getCurrentPage();
  const currentQuery = getCurrentQuery();

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
