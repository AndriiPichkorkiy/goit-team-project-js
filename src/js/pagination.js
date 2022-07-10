import refs from '../js/refs';
import { movieService } from './movie-service';
import templeteCard from './card-templete';
import { localStorageKeys } from './localStorage';
import { renderWatchedOrQueue } from './myLibraryBtns';

const pagination = refs.paginationList;
const root = refs.paginationWrapper;

export function renderPagination(totalPages, currentPage) {
  let liItem = '';
  let beforePages = currentPage - 2;
  let nextPages = currentPage + 2;
  let currentLiItem;

  if (currentPage > 1) {
    liItem += `<li>
    <button class="pagination__button pagination__button--prev" data-page="${
      currentPage - 1
    }">Prev</button>
  </li>`;
  }

  if (currentPage > 3) {
    liItem += `<li>
    <button class="pagination__button pagination__button--js" data-page="1">1</button>
  </li>`;
  }

  if (currentPage > 4) {
    liItem += `<li class="pagination__dots">...</li>`;
  }

  for (
    let buttonsQuantity = beforePages;
    buttonsQuantity <= nextPages;
    buttonsQuantity++
  ) {
    if (buttonsQuantity <= 0) {
      continue;
    }

    if (buttonsQuantity > totalPages) {
      break;
    }

    if (buttonsQuantity === currentPage) {
      currentLiItem = 'pagination__button--current';
    } else {
      currentLiItem = '';
    }
    liItem += `<li>
    <button class="pagination__button ${currentLiItem} pagination__button--js" data-page="${buttonsQuantity}">${buttonsQuantity}</button>
  </li>`;
  }

  if (currentPage < totalPages - 3) {
    liItem += `<li class="pagination__dots">...</li>`;
  }

  if (currentPage < totalPages - 2) {
    liItem += `<li>
    <button class="pagination__button pagination__button--js" data-page="${totalPages}">${totalPages}</button>
  </li>`;
  }

  if (currentPage < totalPages) {
    liItem += `<li>
    <button class="pagination__button pagination__button--next" data-page="${
      currentPage + 1
    }">Next</button>
  </li>`;
  }

  pagination.innerHTML = liItem;

  pagination.addEventListener('click', onPaginationBtnClick);
}
export async function onPaginationBtnClick(event) {
  const pageInUse = document.querySelector('.side-nav__link--current').dataset
    .id;
  if (!event.target.dataset.page) return;
  const page = +event.target.dataset.page;
  refs.moviesCard.innerHTML = '';
console.log(pageInUse);
  if (pageInUse === 'home') {
    const data = await movieService.getSearchQuery(movieService.query, page);
    renderPagination(movieService.totalPage, page);
    return data.results.map(data => renderCollection(data));
  } else if (pageInUse === 'library') {
    const activeBtn = document.querySelector('.library__button--active');
    const value =
      activeBtn.dataset.id === 'watchedBtn'
        ? localStorageKeys.watchedFilm
        : localStorageKeys.filmInQueue;

    const localData = JSON.parse(localStorage.getItem(value));
    const totalPages = Math.ceil(localData.length / 20);
    renderPagination(totalPages, page);
    const arrToRender = localData.slice((page - 1) * 20, page * 20);
    refs.moviesCard.innerHTML = arrToRender
      .map(data => renderWatchedOrQueue(data))
      .join('');
  }
}

export function removePagination() {
  pagination.innerHTML = '';
  root.classList.add('visually-hidden');
  pagination.classList.add('visually-hidden');
}

export function showPagination() {
  root.classList.remove('visually-hidden');
  pagination.classList.remove('visually-hidden');
}

function renderCollection(data) {
  const card = templeteCard(data);
  refs.moviesCard.innerHTML += card;
}
//                                Show home page

export async function fetchPopularMovies() {
  refs.moviesCard.innerHTML = '';
  const data = await movieService.getSearchQuery(
    movieService.query,
    movieService.page
  );
  // data.results.map(data => renderCollection(data));

  // if (data.total_pages === 1) {
  //   pagination.innerHTML = '';
  //   return;
  // }
  // if (data.total_pages > 1) {
    data.results.map(data => renderCollection(data));
    renderPagination(movieService.totalPage, movieService.page);
  // }
}

// fetchPopularMovies();
