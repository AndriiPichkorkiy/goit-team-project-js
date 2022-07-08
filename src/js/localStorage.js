import {movieService} from './movie-service'


// import onClickFilm from './film-modal'
let idRandomNumber = Math.ceil(Math.random() * 30)

// onClickFilm(idRandomNumber);
async function onClickFilm(id) {
    const answer = await movieService.getOneMovie(id).then(movie => {
        // console.log(movie);
        const markup = `<div class="film-card">
        <div class="film-poster">
       <a href="${movie.poster_path}">
<img class="film-poster-img" src="${movie.poster_path}" alt="${movie.tags}" loading="lazy" width=375/>
</div>

<h2 class="name-film">${movie.original_title}</h2>
<p class="info-film">Vote / Votes<span class="info-value">${movie.vote_average}</span></p>
<p class="info-film">Popularity<span class="info-value">${movie.vote_count}</span></p>
<p class="info-film">Popularity<span class="info-value">${movie.popularity}</span></p>
<p class="info-film">Original Title<span class="info-value">${movie.original_title}</span></p>
<p class="info-film">ABOUT<span class="info-value">${movie.overview}</span></p>

<button type="button" class="add-to-watched">ADD TO WATCHED</button>
<button type="button" class="add-to-queue">ADD TO QUEUE</button>
</div>`
      document.querySelector('.modal-film').insertAdjacentHTML('beforeend', markup);
      return movie
    }).then(data=>objInStorage(data))
}
//  <button type="button" class="add-to-watched">ADD TO WATCHED</button>
// <button type="button" class="add-to-queue">ADD TO QUEUE</button> 
//  <div class="wrapper-button">
//       <button id="watched" class="watched-btn add-to-watched">add to watched</button>
//   <button id="queue" class=" watched-btn queue-btn add-to-queue">add to queue</button></div>

// // ..........мінімальна розмітка потрібна щоб працювало........
     

function addEventsOnModalBtn(){
  const watchedBtn = document.querySelector(".add-to-watched");
  console.log(watchedBtn)
const queueBtn = document.querySelector('.add-to-queue');
if (watchedBtn) {
  watchedBtn.addEventListener('click', addToWatched)
  queueBtn.addEventListener('click',addedToQueue)
  }
else {
  alert("buttons are not here!!")
  }
}
export { addEventsOnModalBtn }



let watchedBtn;
let queueBtn;
let filmCard;

 function addEventsOnModalBtn(){
  watchedBtn = document.querySelector(".add-to-watched");
   queueBtn = document.querySelector('.add-to-queue');
   filmCard = document.querySelector('.film-card')
  
  // if (watchedBtn!==null) {

  watchedBtn.addEventListener('click', addToWatched,{once:true})
   queueBtn.addEventListener('click', addedToQueue);
   searchByIdWatched(localStorageKeys.watchedFilm)
   searchByIdQueue(localStorageKeys.filmInQueue)
  // }
// else {
//   alert("buttons are not here!!")
//   }
   return filmCard.dataset.filmId
}
export { addEventsOnModalBtn }


const localStorageKeys = {
  watchedFilm:'watchedFilm',
  filmInQueue:'filmInQueue'
}

// function objInStorage(data) {
//   let obj;
//   const { id, title, poster_path, release_date, vote_average, genre_ids } =
//     data;

//   obj = {
//     id,
//     title,
//     poster_path,
//     release_date,
//     vote_average,
//     genre_ids
//   }
//  idInStorage = id
//   objectInStorage=obj
//   return obj
// }

////дістати значення з локалсторедж JSON.parse(localStorage.getItem(localStorageKeys.filmInQueue або localStorageKeys.watchedFilm

function addToWatched() {
    jsonLocalStorage(localStorageKeys.watchedFilm)
   addedStyleToWatched()
    // watchedBtn.removeEventListener('click', addToWatched)
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
  watchedBtn.addEventListener('click', addToWatched)
}

function addedToQueue() {
  jsonLocalStorage(localStorageKeys.filmInQueue)
  addedStyleToQueue()

}

function addedStyleToWatched() {
  watchedBtn.textContent = 'remove from watched'
  watchedBtn.style.backgroundColor = 'green' 

  queueBtn.setAttribute('disabled', 'disabled')
  queueBtn.style.opacity = 0.25;
  watchedBtn.style.display="flex"
  watchedBtn.addEventListener('click', removeFromWatched)
  }

function addedStyleToQueue() {
  queueBtn.textContent = 'remove from queue'
 
    queueBtn.style.backgroundColor = 'green'
    queueBtn.style.display='flex'
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

  for (let iterator of arr) {
 
    if (filmCard.dataset.filmId === iterator.filmId) {
  addedStyleToWatched()
 }
  }
 
}
function searchByIdQueue(value) {

    const arr = JSON.parse(localStorage.getItem(value))

    for (let iterator of arr) {
  
    if (filmCard.dataset.filmId === iterator.filmId) {
    addedStyleToQueue()
    }
    }

}
