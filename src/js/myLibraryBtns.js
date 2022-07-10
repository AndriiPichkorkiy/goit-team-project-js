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
  onNextBtnClick,
  onPrevBtnClick,
} from './pagination';

let watchedBtn;
let queueBtn;
let textContent = 'Watched';

export function activateHeadersBtn() {
  //   const activeHeader = document.querySelector('.js-active-header');
  watchedBtn = document.querySelector('[data-id="watchedBtn"]');
  queueBtn = document.querySelector('[data-id="queueBtn"]');

  watchedBtn.addEventListener('click', pressWatchedBtn);
  queueBtn.addEventListener('click', pressQueuedBtn);

  if (textContent === 'Watched') {
    watchedBtn.dispatchEvent(new Event('click'));
  }
  if (textContent === 'Queue') {
    queueBtn.dispatchEvent(new Event('click'));
  }
}

function pressWatchedBtn() {
  watchedBtn.classList.add('library__button--active');
  queueBtn.classList.remove('library__button--active');
  textContent = 'Watched';
  takeFromStorage(localStorageKeys.watchedFilm);

  // switchPagination();
}

function pressQueuedBtn() {
  queueBtn.classList.add('library__button--active');
  watchedBtn.classList.remove('library__button--active');
  textContent = 'Queue';
  takeFromStorage(localStorageKeys.filmInQueue);

  // switchPagination();
}

let currentPage = 1;
let quantityPages;
let index = 0;

function takeFromStorage(value) {
  let arr = [];
  showPagination();
  const oldItems = JSON.parse(localStorage.getItem(value)) || arr;
  if (oldItems === arr || oldItems.length === 0) {
    removePagination();
    // alert('no films here.please add film in main page')
    document.querySelector(
      '.movies-card'
    ).innerHTML = `<div class="content__wrapper">
        <h2 class="content__title">There's nothing here! <br/>
          Please add some movies to
          <span class="content__text">${textContent}</span>!
        </h2>
      </div>`;
    return;
  }

  if (oldItems.length < 20) {
    // removePagination();
  }

  quantityPages = Math.ceil(oldItems.length / 20);

  const arrayOfArrays = chunkArrayInGroups(oldItems, 20);
  // console.log(arrayOfArrays[index]);

  renderPagination(quantityPages, currentPage);
  const card = arrayOfArrays[index]
    .map(result => renderWatchedOrQueue(result))
    .join('');
  // console.log("1 card :",card);
  refs.moviesCard.innerHTML = card;
}

function chunkArrayInGroups(arr, size) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size));
  }
  return newArr;
}

export function renderWatchedOrQueue(data) {
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

export { textContent };

// function switchPagination() {
//     const prevBtnEl = document.querySelector('.pagination__button--prev');
//     const nextBtnEl = document.querySelector('.pagination__button--next');
//     const btnEl = document.querySelectorAll('.pagination__button--js');
//     console.log(prevBtnEl);

//   if (prevBtnEl) {
//       console.log(onPrevBtnClick);
//       prevBtnEl.removeEventListener('click', onPrevBtnClick);
//       prevBtnEl.addEventListener('click',prevBtnClick)
//     }
//   if (nextBtnEl) {

//     nextBtnEl.removeEventListener('click',onNextBtnClick)
//     nextBtnEl.addEventListener('click', NextBtnClick);
//     }
//     }

// function NextBtnClick() {
//   const oldItems =
//     JSON.parse(localStorage.getItem(localStorageKeys.watchedFilm)) || arr;
//   const arrayOfArrays = chunkArrayInGroups(oldItems, 20);
//   console.log(arrayOfArrays[index + 1]);

//   renderPagination(quantityPages, currentPage + 1);
//   const card = arrayOfArrays[index + 1]
//     .map(result => renderWatchedOrQueue(result))
//     .join('');
//   console.log('1 card :', card);

//   refs.moviesCard.innerHTML = card;
// }
// function prevBtnClick() {
//   const oldItems =
//     JSON.parse(localStorage.getItem(localStorageKeys.watchedFilm)) || arr;
//   const arrayOfArrays = chunkArrayInGroups(oldItems, 20);
//   console.log(arrayOfArrays[index]);

//   renderPagination(quantityPages, currentPage);
//   const card = arrayOfArrays[index]
//     .map(result => renderWatchedOrQueue(result))
//     .join('');
//   // console.log("1 card :",card);

//   refs.moviesCard.innerHTML = card;
// }
