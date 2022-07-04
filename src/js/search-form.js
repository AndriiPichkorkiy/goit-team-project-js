import throttle from 'lodash/throttle';
import debounce from 'lodash/throttle';
import refs from "./refs";
import MovieService from './movie-service';
import renderCardTemplate from './card-templete';
import './header'

refs.searchForm = document.querySelector(['.search-form']);

const movieService = new MovieService();
// const DEBOUNCE_DELAY = 300;

// refs.searchForm.addEventListener("input", debounce(searchMovies, DEBOUNCE_DELAY));
refs.searchForm.addEventListener("submit",searchMovies);

function searchMovies(event) {
    event.preventDefault();

   const value = event.currentTarget.elements.query.value.trim();
    
    if (value.length <= 2 || value.length === 0) {
        moreTwoCharacters();
        return;
    }

    movieService.resetPage();

    fetchData(value);

    clearMarkup();
}

async function fetchData(value) {
    const data = await movieService.getMoviesByTitle(value)
        .then(({ results }) => {
            return results.map(result => renderCardTemplate(result))
        })
    refs.moviesCard.innerHTML = data;
}


function moreTwoCharacters(){
    alert('Please enter more than 2 characters');
}
// function correctionRequest(){
//     alert('Please enter a correction request');
// }
// function nothingRequest(){
//     alert('Sorry, there is nothing for your request');
// }
// function selectionMovies(){
//     alert('We have selected ${} movies for you. Enjoy yourself');
// }
// function fetchError() {
//     alert('Oops!!!');
// }
function clearMarkup() {
  refs.moviesCard.innerHTML = '';
}