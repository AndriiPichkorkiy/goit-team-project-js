let watchedBtn;
let queueBtn;
let filmCard;

 function addEventsOnModalBtn(){
  watchedBtn = document.querySelector(".add-to-watched");
  queueBtn = document.querySelector('.add-to-queue');
  filmCard = document.querySelector('.film-card')

  watchedBtn.addEventListener('click', addToWatched,{once:true})
  queueBtn.addEventListener('click', addedToQueue);
  searchByIdWatched(localStorageKeys.watchedFilm)
  searchByIdQueue(localStorageKeys.filmInQueue)
}
export { addEventsOnModalBtn }


export const localStorageKeys = {
  watchedFilm:'watchedFilm',
  filmInQueue:'filmInQueue'
}

function addToWatched() {
    jsonLocalStorage(localStorageKeys.watchedFilm)
   addedStyleToWatched()
    // watchedBtn.removeEventListener('click', addToWatched)
}
function removeFromWatched() {
  if (watchedBtn.textContent === 'remove from watched') {
      removeFromStorage(localStorageKeys.watchedFilm)
      watchedBtn.style.backgroundColor = '#FF6B01' 
      watchedBtn.style.backgroundColor = '#FFF' 
      watchedBtn.textContent='add to watched'
      queueBtn.removeAttribute('disabled')
      queueBtn.style.opacity = 1;
    }
  watchedBtn.removeEventListener('click', removeFromWatched)
  watchedBtn.addEventListener('click', addToWatched)
}

function addedToQueue() {
  jsonLocalStorage(localStorageKeys.filmInQueue)
  addedStyleToQueue()

}

function addedStyleToWatched() {
  watchedBtn.textContent = 'remove from watched'
  // watchedBtn.style.backgroundColor = 'green' 

  queueBtn.setAttribute('disabled', 'disabled')
  queueBtn.style.opacity = 0.25;
  // watchedBtn.style.display="flex"
  watchedBtn.addEventListener('click', removeFromWatched)
  }

function addedStyleToQueue() {
  queueBtn.textContent = 'remove from queue'
 
    // queueBtn.style.backgroundColor = 'green'
    // queueBtn.style.display='flex'
    watchedBtn.style.opacity = 0.25;
    watchedBtn.setAttribute('disabled', 'disabled')
    
    queueBtn.addEventListener('click',removeFromQueue)
}

function removeFromQueue() {
  if (queueBtn.textContent === 'remove from queue') {
       removeFromStorage(localStorageKeys.filmInQueue)
      queueBtn.style.backgroundColor = '#fff'
      queueBtn.style.color='black'
      queueBtn.textContent='add to queue'
      queueBtn.removeAttribute('disabled')
      watchedBtn.removeAttribute('disabled')
      watchedBtn.style.opacity = 1;
    }
     queueBtn.removeEventListener('click', removeFromQueue)
}

function jsonLocalStorage(value) {
  const oldItems = JSON.parse(localStorage.getItem(value)) || [];
  oldItems.push(filmCard.dataset)
  localStorage.setItem(value, JSON.stringify(oldItems));
}
   
  

function removeFromStorage(value) {
  const arr = JSON.parse(localStorage.getItem(value))
  const newArray=filterArrObj(arr)
  localStorage.setItem(value, JSON.stringify(newArray))


}

function filterArrObj(arr) {
// console.log(arr);
  const newArr = arr.filter(film => film.filmId !== filmCard.dataset.filmId)
  return newArr 
}
function searchByIdWatched(value) {
  const arr = JSON.parse(localStorage.getItem(value))
  if (arr === null) { return }
  else {
    for (let iterator of arr) {
 
      if (filmCard.dataset.filmId === iterator.filmId) {
        addedStyleToWatched()
      }
    }
  }
 
}
function searchByIdQueue(value) {

    const arr = JSON.parse(localStorage.getItem(value))
  if (arr === null) { return }
  else {
    for (let iterator of arr) {
  
      if (filmCard.dataset.filmId === iterator.filmId) {
        addedStyleToQueue()
      }
    }
  }
}
