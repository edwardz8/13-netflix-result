import 'whatwg-fetch';
import fillInResult from './fill-in-result';

const searchForm = document.querySelector('.search-button');
const searchInput = document.querySelector('.search__bar');
const searchResult = document.querySelector('.movie-profile');

function startSearch(term) {
  fetch(`http://netflixroulette.net/api/api.php?title=${term}`)
  .then((res) => res.json())
  .then((data) => {
    fillInResult(searchResult, data);
  });
}

searchForm.addEventListener('click', (ev) => {
  ev.preventDefault();

  startSearch(searchInput.value);
});
startSearch('Attack on Titan');
