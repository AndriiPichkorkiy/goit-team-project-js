import refs from '../js/refs';
import { movieService } from './movie-service';
import templeteCard from './card-templete';

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

  // const prevBtnEl = document.querySelector('.pagination__button--prev');
  // const nextBtnEl = document.querySelector('.pagination__button--next');
  pagination.addEventListener('click', onPaginationBtnClick);

  // if (prevBtnEl) {
  //   prevBtnEl.addEventListener('click', onPrevBtnClick);
  // }
  // if (nextBtnEl) {
  //   nextBtnEl.addEventListener('click', onNextBtnClick);
  // }
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

// export async function onPrevBtnClick() {
//   // movieService.page -= 1;
//   const data = await movieService.getSearchQuery(
//     movieService.query,
//     movieService.page - 1
//   );
//   renderPagination(movieService.totalPage, movieService.page);
//   refs.moviesCard.innerHTML = '';
//   return data.results.map(data => renderCollection(data));
// }

// export async function onNextBtnClick() {
//   // movieService.page += 1;
//   const data = await movieService.getSearchQuery(
//     movieService.query,
//     movieService.page + 1
//   );
//   renderPagination(movieService.totalPage, movieService.page);
//   refs.moviesCard.innerHTML = '';
//   return data.results.map(data => renderCollection(data));
// }

export async function onPaginationBtnClick(event) {
  const itemToFind = document.querySelector('.side-nav__link--current').dataset
    .id;
  console.log(itemToFind);
  if (itemToFind === 'library') {
    const itemToFind2 = document.querySelector();
  }
  if (event.target.dataset.page) {
    const page = +event.target.dataset.page;
    const data = await movieService.getSearchQuery(movieService.query, page);
    renderPagination(movieService.totalPage, page);
    refs.moviesCard.innerHTML = '';
    return data.results.map(data => renderCollection(data));
  }
  return;
}

function renderCollection(data) {
  const card = templeteCard(data);
  refs.moviesCard.innerHTML += card;
}
//                                Show home page

export async function fetchPopularMovies() {
  const data = await movieService.getSearchQuery(
    movieService.query,
    movieService.page
  );
  data.results.map(data => renderCollection(data));

  if (data.total_pages === 1) {
    removePagination();
    return;
  }
  if (data.total_pages > 1) {
    // data.results.map(data => renderCollection(data));
    renderPagination(movieService.totalPage, movieService.page);
  }
}

fetchPopularMovies();
