import { renderAfterAddAndRemoveFilm } from './myLibraryBtns';

let watchedBtn;
let queueBtn;
let filmCard;

function addEventsOnModalBtn() {
  watchedBtn = document.querySelector('.add-to-watched');
  queueBtn = document.querySelector('.add-to-queue');
  filmCard = document.querySelector('.film-card');

  watchedBtn.addEventListener('click', addToWatched, { once: true });
  queueBtn.addEventListener('click', addedToQueue);
  searchByIdWatched(localStorageKeys.watchedFilm);
  searchByIdQueue(localStorageKeys.filmInQueue);
}
export { addEventsOnModalBtn };

export const localStorageKeys = {
  watchedFilm: 'watchedFilm',
  filmInQueue: 'filmInQueue',
};

function addToWatched() {
  jsonLocalStorage(localStorageKeys.watchedFilm);
  addedStyleToWatched();

  // watchedBtn.removeEventListener('click', addToWatched)
}
function removeFromWatched() {
  if (watchedBtn.textContent === 'remove from watched') {
    removeFromStorage(localStorageKeys.watchedFilm);
    watchedBtn.style.backgroundColor = '#FFF';
    watchedBtn.style.border = '1px solid black';
    watchedBtn.textContent = 'add to watched';
    queueBtn.disabled = false;
    queueBtn.style.opacity = 1;
  }
  watchedBtn.removeEventListener('click', removeFromWatched);
  watchedBtn.addEventListener('click', addToWatched);
}

function addedToQueue() {
  jsonLocalStorage(localStorageKeys.filmInQueue);
  addedStyleToQueue();
}

function addedStyleToWatched() {
  watchedBtn.textContent = 'remove from watched';
  watchedBtn.style.backgroundColor = '#FF6B01';
  watchedBtn.style.border = 'none';

  queueBtn.disabled = true;
  queueBtn.style.opacity = 0.25;
  watchedBtn.addEventListener('click', removeFromWatched);
}

function addedStyleToQueue() {
  queueBtn.textContent = 'remove from queue';
  queueBtn.style.backgroundColor = '#FF6B01';
  queueBtn.style.border = 'none';
  watchedBtn.style.opacity = 0.25;
  watchedBtn.disabled = true;

  queueBtn.addEventListener('click', removeFromQueue);
}

function removeFromQueue() {
  if (queueBtn.textContent === 'remove from queue') {
    removeFromStorage(localStorageKeys.filmInQueue);
    queueBtn.style.backgroundColor = '#FFF';
    queueBtn.style.border = '1px solid black';
    queueBtn.style.color = 'black';
    queueBtn.textContent = 'add to queue';
    queueBtn.disabled = false;
    watchedBtn.disabled = false;
    watchedBtn.style.opacity = 1;
  }
  queueBtn.removeEventListener('click', removeFromQueue);
}

function jsonLocalStorage(value) {
  const oldItems = JSON.parse(localStorage.getItem(value)) || [];
  const card = { ...filmCard.dataset };

  card.genre_ids = filmCard.dataset.genre.split(',');

  oldItems.push(card);

  localStorage.setItem(value, JSON.stringify(oldItems));

  renderAfterAddAndRemoveFilm();
}

function removeFromStorage(value) {
  const arr = JSON.parse(localStorage.getItem(value));
  const newArray = filterArrObj(arr);
  localStorage.setItem(value, JSON.stringify(newArray));
  renderAfterAddAndRemoveFilm();
}

function filterArrObj(arr) {
  const newArr = arr.filter(film => film.id !== filmCard.dataset.id);
  return newArr;
}
function searchByIdWatched(value) {
  const arr = JSON.parse(localStorage.getItem(value));
  if (arr === null) {
    return;
  } else {
    for (let iterator of arr) {
      if (filmCard.dataset.id === iterator.id) {
        addedStyleToWatched();
        return;
      }
    }
  }
}
function searchByIdQueue(value) {
  const arr = JSON.parse(localStorage.getItem(value));
  if (arr === null) {
    return;
  } else {
    for (let iterator of arr) {
      if (filmCard.dataset.id === iterator.id) {
        addedStyleToQueue();
        return;
      }
    }
  }
}
