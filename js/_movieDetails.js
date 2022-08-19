import ghibliData from './_createElement.js';
import { movieData } from './_fetchData.js';

export default function showMovieDetails() {
  const figures = document.querySelectorAll('[data-js="singleMovie"]');
  figures.forEach(figure => {
    figure.addEventListener('click', () => {
      const figureCaption = figure.querySelector('[data-js="caption"]');
      const movieTitle = [
        movieData.find(o => o.title === figureCaption.textContent),
      ];
      ghibliData(movieTitle);
    });
  });
}
