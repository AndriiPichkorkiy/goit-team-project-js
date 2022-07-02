const DEBOUNCE_DELAY = 300;

const searchForm = document.querySelector('#search-form');

searchForm.addEventListener("input", debounce(searchMovies, DEBOUNCE_DELAY));

function searchMovies(e) {
    const form = e.target.value.trim();

    // clearMarkup();
    fetchMovies(form)
        .then(renderAllMovies)
        .catch(fetchError)
}


function fetchError() {
    alert('Oops!!!');
}
function moreTwoCharacters(){
    alert('Please enter more than two characters');
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