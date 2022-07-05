import MovieService from './movie-service'
// const movi = new MovieService
// // ..........мінімальна розмітка потрібна щоб працювало........
//   ........................................................
// .............................................................
// <div class="wrapper-button">
//         <button id ="watched" class="watched-btn">add to watched</button>
//         <button id="queue" class=" watched-btn queue-btn">add to queue</button></div >
// ................................................................................................................................................          


/////імітую айді різних карток
let idRandomNumber = Math.ceil(Math.random() * 30)


const watchedBtn = document.querySelector("#watched");
const queueBtn = document.querySelector('#queue');

watchedBtn.addEventListener('click', addToWatched)
queueBtn.addEventListener('click',addedToQueue)


const localStorageKeys = {
  watchedFilm:'watchedFilm',
  filmInQueue:'filmInQueue'
}


////дістати значення з локалсторедж JSON.parse(localStorage.getItem(localStorageKeys.filmInQueue або localStorageKeys.watchedFilm

function addToWatched() {
    watchedBtn.textContent = 'remove from watched'
    watchedBtn.style.backgroundColor='green'
    jsonLocalStorage(localStorageKeys.watchedFilm)
    queueBtn.setAttribute('disabled', 'disabled')
    queueBtn.style.opacity = 0.25;
  
    watchedBtn.addEventListener('click', removeFromWatched)
}
function removeFromWatched() {
  if (watchedBtn.textContent === 'remove from watched') {
      removeFromStorage(localStorageKeys.watchedFilm)
      watchedBtn.style.backgroundColor = '#FF6B01' 
      watchedBtn.textContent='add to watched'
      queueBtn.removeAttribute('disabled')
      queueBtn.style.opacity = 1;

    }
     watchedBtn.removeEventListener('click', removeFromWatched)
}

function addedToQueue() {
    jsonLocalStorage(localStorageKeys.filmInQueue)
    queueBtn.textContent = 'remove from queue'
    queueBtn.style.backgroundColor = 'green'
    watchedBtn.setAttribute('disabled', 'disabled')
    watchedBtn.style.opacity = 0.25;

    queueBtn.addEventListener('click',removeFromQueue)
}



function removeFromQueue() {
  if (queueBtn.textContent === 'remove from queue') {
       removeFromStorage(localStorageKeys.filmInQueue)
      queueBtn.style.backgroundColor = '#fff' 
      queueBtn.textContent='add to queue'
      queueBtn.removeAttribute('disabled')
      watchedBtn.removeAttribute('disabled')
      watchedBtn.style.opacity = 1;
    }
     queueBtn.removeEventListener('click', removeFromQueue)
}

function jsonLocalStorage(value) {
  const oldItems = JSON.parse(localStorage.getItem(value)) || [];
  if (!oldItems.includes(idRandomNumber)) {
      oldItems.push(idRandomNumber);
  }
  localStorage.setItem(value, JSON.stringify(filterById(oldItems))); 
 
}
function removeFromStorage(value) {
  const arr = JSON.parse(localStorage.getItem(value))
  if (arr.includes(idRandomNumber)){
    removeItemAll(arr,idRandomNumber)
    localStorage.setItem(value, JSON.stringify(filterById(arr)))
    console.log(filterById(arr));
   
  }


}


function filterById(arr) {
 return arr.filter(
    (film, index, array) => array.indexOf(film) === index
  );

}

function removeItemAll(arr, value) {
  for (let i = 0; i < arr.length; i+=1) {
    if (arr[i] === value) {
      arr.splice(i, 1);
    } 
  }
  return arr
}
