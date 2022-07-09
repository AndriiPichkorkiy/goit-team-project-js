import renderCardTemplate from './card-templete';
import { markupButtons } from './header';
import {
  jsonLocalStorage,
  localStorageKeys,
  removeFromStorage,
} from './localStorage';
import refs from './refs';
import {
  showPagination,
  renderPagination,
  removePagination,
} from './pagination';

export function activateHeadersBtn() {
  const activeHeader = document.querySelector('.js-active-header');
  const watchedBtn = document.querySelector('[data-id="watchedBtn"]');
  const queueBtn = document.querySelector('[data-id="queueBtn"]');

  watchedBtn.addEventListener('click', pressWatchedBtn);
  queueBtn.addEventListener('click', pressQueuedBtn);
}

function pressWatchedBtn() {
  takeFromStorage(localStorageKeys.watchedFilm);
  switchPagination();
}

function pressQueuedBtn() {
  takeFromStorage(localStorageKeys.filmInQueue);
  switchPagination();
}

let currentPage = 1;
let quantityPages;
let index = 0;

function takeFromStorage(value) {
  let arr = [];

  const oldItems = JSON.parse(localStorage.getItem(value)) || arr;
  if (oldItems === arr || oldItems.length === 0) {
    alert('no films here.please add film in main page');
    return;
  }
  console.log(oldItems.length);
  if (oldItems.length < 20) {
    removePagination();
  } else {
    // showPagination()
  }
  quantityPages = Math.ceil(oldItems.length / 20);
  console.log(quantityPages);
  const arrayOfArrays = chunkArrayInGroups(oldItems, 20);
  console.log(arrayOfArrays[index]);

  renderPagination(quantityPages, currentPage);
  const card = arrayOfArrays[index]
    .map(result => renderWatchedOrQueue(result))
    .join('');
  // console.log("1 card :",card);
  refs.moviesCard.innerHTML = card;
  //    renderPagination(totalPages, currentPage)
}

function chunkArrayInGroups(arr, size) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size));
  }
  return newArr;
}

function renderWatchedOrQueue(data) {
  const { cardRelease, filmGenre, filmId, filmPoster, filmTitle, filmVote } =
    data;

  return `<li class="movies-card__item">
          <a
            href="#"
            class="movies-card__link"
            data-modal-open
            data-card-id="${filmId}"
          >
            <div class="movies-card__thumb">
              <img
                src="https://image.tmdb.org/t/p/w500/${filmPoster}"
                alt="${filmTitle}"
                loading="lazy"
              />
            </div>
            <div class="movies-card__content">
              <h2 class="movies-card__heading text">${filmTitle}</h2>
              <p class="movies-card__text ">
                ${filmGenre} | ${cardRelease}
                <span class="movies-card__rating">${filmVote}</span>
              </p>
            </div>
          </a>
        </li>`;
}

function switchPagination() {
  const prevBtnEl = document.querySelector('.pagination__button--prev');
  const nextBtnEl = document.querySelector('.pagination__button--next');
  const btnEl = document.querySelectorAll('.pagination__button--js');
  console.log(nextBtnEl);
  //   btnEl.forEach(addListeners);
  if (prevBtnEl) {
    prevBtnEl.addEventListener('click', onPrevBtnClick);
  }
  if (nextBtnEl) {
    nextBtnEl.addEventListener('click', onNextBtnClick);
  }
}

function onNextBtnClick() {
  const oldItems =
    JSON.parse(localStorage.getItem(localStorageKeys.watchedFilm)) || arr;
  const arrayOfArrays = chunkArrayInGroups(oldItems, 20);
  console.log(arrayOfArrays[index + 1]);

  renderPagination(quantityPages, currentPage + 1);
  const card = arrayOfArrays[index + 1]
    .map(result => renderWatchedOrQueue(result))
    .join('');
  // console.log("1 card :",card);
  refs.moviesCard.innerHTML = card;
}
