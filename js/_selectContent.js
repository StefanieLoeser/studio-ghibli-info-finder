import { movieData } from './_fetchData.js';
import ghibliData from './_createElement.js';

export default function selector() {
  const dropdown = document.querySelector('[data-js=dropdown]');
  dropdown.addEventListener('change', event => {
    const filteredMovie = movieData.filter(
      movie => movie.title === event.target.value
    );

    if (filteredMovie.length > 0) {
      ghibliData(filteredMovie);
    } else {
      ghibliData(movieData);
    }

    console.log(filteredMovie);
  });
}
