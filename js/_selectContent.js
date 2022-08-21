import { movieData } from './_fetchData.js';
import ghibliData from './_createElement.js';
import showMovieDetails from './_movieDetails.js';
import createDetails from './_createDetails.js';

export default function selector() {
  const dropdown = document.querySelector('[data-js=dropdown]');
  const reset = document.querySelector('[data-js=resetButton]');

  dropdown.addEventListener('change', event => {
    const filteredMovie = movieData.filter(
      movie => movie.title === event.target.value
    );
    if (filteredMovie.length > 0) {
      ghibliData(filteredMovie);
      reset.classList.remove('hidden');
      createDetails(filteredMovie);
    } else {
      ghibliData(movieData);
      showMovieDetails();
    }
  });
}
