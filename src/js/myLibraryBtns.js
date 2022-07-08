import renderCardTemplate from './card-templete';
import { markupButtons } from './header'
import {jsonLocalStorage,localStorageKeys,removeFromStorage} from './localStorage'
import refs from "./refs";



export function activateHeadersBtn() {
    
    const activeHeader = document.querySelector('.js-active-header');
    const watchedBtn = document.querySelector('[data-id="watchedBtn"]')
    const queueBtn = document.querySelector('[data-id="queueBtn"]')
    
    watchedBtn.addEventListener('click', pressWatchedBtn)
    queueBtn.addEventListener('click', pressQueuedBtn)

  

}

function pressWatchedBtn() {
    takeFromStorage(localStorageKeys.watchedFilm)
}

function pressQueuedBtn() {
    takeFromStorage(localStorageKeys.filmInQueue)
}

function takeFromStorage(value) {
    
    let arr = []
    console.log(arr.length);
    const oldItems = JSON.parse(localStorage.getItem(value)) || arr;
    if (oldItems === arr||oldItems.length===0) {
    alert('no films here.please add film in main page')
    return
    }

    console.log('всі масиви :' ,oldItems)
    const card = oldItems
    .map(result => renderWatchedOrQueue(result))
    .join('');
    console.log("1 card :",card);
    refs.moviesCard.innerHTML = card;
   
    
}
function renderWatchedOrQueue(data) {
    
    const { cardRelease,
            filmGenre,
            filmId,
            filmPoster,
            filmTitle,
            filmVote } =
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

