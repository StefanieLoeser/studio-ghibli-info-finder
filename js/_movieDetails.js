import ghibliData from './_createElement.js';
import { movieData } from './_fetchData.js';
import createDetails from './_createDetails.js';

export default function showMovieDetails() {
  const figures = document.querySelectorAll('[data-js=singleMovie]');
  const resetButton = document.querySelector('[data-js=resetButton]');
  figures.forEach(figure => {
    figure.addEventListener('click', () => {
      const movieTitle = figure.querySelector('[data-js="caption"]');
      const movie = [
        movieData.find(o => o.title === movieTitle.textContent),
      ];
      ghibliData(movie);
      resetButton.classList.remove('hidden');
      createDetails(movie);
    });
  });
}
