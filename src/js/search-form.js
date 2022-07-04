import throttle from 'lodash/throttle';
import debounce from 'lodash/throttle';
import refs from "./refs";
import MovieService from './movie-service';

const newsApiService = new MovieService();
console.log(newsApiService);
const DEBOUNCE_DELAY = 300;

// refs.searchForm.addEventListener("input", debounce(searchMovies, DEBOUNCE_DELAY));
refs.searchForm.addEventListener("submit",searchMovies);
// refs.searchBtn.addEventListener('click', searchMovies);

function searchMovies(event) {
    event.preventDefault();

    newsApiService.query = event.currentTarget.elements.query.value.trim();
    
    console.log(newsApiService.query);
    // if (newsApiService.query.length <= 2 || newsApiService.query.length === 0) {
    //     moreTwoCharacters();
    // }
    // if (!newsApiService.query) {
    //     correctionRequest();
    // }
    
    fetchData();
    // clearMarkup();
}
async function fetchData() {
    try {
        const data = await newsApiService.fetchMovies({})
    console.log(data);
    } catch (error) {
    console.log(error);
  }
    
}
function fetchError() {
    alert('Oops!!!');
}
function moreTwoCharacters(){
    alert('Please enter more than 2 characters');
}
function correctionRequest(){
    alert('Please enter a correction request');
}
function nothingRequest(){
    alert('Sorry, there is nothing for your request');
}
function selectionMovies(){
    alert('We have selected ${} movies for you. Enjoy yourself');
}
// function clearMarkup() {
//   refs..innerHTML = '';
//   refs..innerHTML = '';
// }