import refs from '../js/refs';
import { movieService } from './movie-service';
import templeteCard from './card-templete';

const pagination = refs.paginationList;
const root = refs.paginationWrapper;

async function renderPagination(totalPages, currentPage) {
  let liItem = '';
  let beforePages = currentPage - 2;
  let nextPages = currentPage + 2;
  let currentLiItem;

  if (currentPage > 1) {
    liItem += `<li>
    <button class="pagination__button pagination__button--prev">Prev</button>
  </li>`;
  }

  if (currentPage > 3) {
    liItem += `<li>
    <button class="pagination__button pagination__button--js">1</button>
  </li>`;
  }

  if (currentPage > 4) {
    liItem += `<li class="pagination__dots">...</li>`;
  }

  for (
    buttonsQuantity = beforePages;
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
    <button class="pagination__button ${currentLiItem} pagination__button--js">${buttonsQuantity}</button>
  </li>`;
  }

  if (currentPage < totalPages - 3) {
    liItem += `<li class="pagination__dots">...</li>`;
  }

  if (currentPage < totalPages - 2) {
    liItem += `<li>
    <button class="pagination__button pagination__button--js">${totalPages}</button>
  </li>`;
  }

  if (currentPage < totalPages) {
    liItem += `<li>
    <button class="pagination__button pagination__button--next">Next</button>
  </li>`;
  }

  pagination.innerHTML = liItem;

  const prevBtnEl = document.querySelector('.pagination__button--prev');
  const nextBtnEl = document.querySelector('.pagination__button--next');
  const btnEl = document.querySelectorAll('.pagination__button--js');

  btnEl.forEach(addListeners);
  if (prevBtnEl) {
    prevBtnEl.addEventListener('click', onPrevBtnClick);
  }
  if (nextBtnEl) {
    nextBtnEl.addEventListener('click', onNextBtnClick);
  }
}

async function onPrevBtnClick() {
  movieService.pagePopular -= 1;
  const data = await movieService.getPopularMovies(movieService.pagePopular);
  renderPagination(movieService.totalPagePopular, movieService.pagePopular);
  refs.moviesCard.innerHTML = '';
  return data.results.map(data => renderCollection(data));
}

async function onNextBtnClick() {
  movieService.pagePopular += 1;
  const data = await movieService.getPopularMovies(movieService.pagePopular);
  renderPagination(movieService.totalPagePopular, movieService.pagePopular);
  refs.moviesCard.innerHTML = '';
  return data.results.map(data => renderCollection(data));
}

async function onPaginationBtnClick(event) {
  movieService.pagePopular = +event.target.innerText;
  renderPagination(movieService.totalPagePopular, movieService.pagePopular);
  const data = await movieService.getPopularMovies(movieService.pagePopular);
  refs.moviesCard.innerHTML = '';
  return data.results.map(data => renderCollection(data));
}

function addListeners(element) {
  element.addEventListener('click', onPaginationBtnClick);
}

function renderCollection(data) {
  const card = templeteCard(data);
  refs.moviesCard.innerHTML += card;
}

async function fetchPopularMovies() {
  const data = await movieService.getPopularMovies();
  if (data.total_pages === 1) {
    root.innerHTML = '';
    root.classList.add('visually-hidden');
    pagination.classList.add('visually-hidden');
    data.results.map(data => renderCollection(data));
    return;
  }
  if (data.total_pages > 1) {
    data.results.map(data => renderCollection(data));
    renderPagination(movieService.totalPagePopular, movieService.pagePopular);
  }
}

fetchPopularMovies();
