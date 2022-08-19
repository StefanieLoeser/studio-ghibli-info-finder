const api = 'https://ghibliapi.herokuapp.com/films/';

fetch(api)
  .then(response => response.json())
  .then(data => ghibliData(data));

export default function ghibliData(data) {
  const movies = data;
  const gallery = document.querySelector('[data-js="movie"]');
  const dropdown = document.querySelector('[data-js="dropdown"]');
  console.log(movies);

  movies.forEach(movie => {
    const title = document.createElement('option');
    title.textContent = movie.title;
    title.setAttribute('value', movie.title);
    dropdown.append(title);

    const figure = document.createElement('figure');
    gallery.append(figure);

    const movieImage = document.createElement('img');
    movieImage.src = movie.image;
    movieImage.setAttribute('alt', '');
    movieImage.classList.add('movie__container--image');
    figure.append(movieImage);

    const movieTitle = document.createElement('figcaption');
    movieTitle.textContent = movie.title;
    figure.append(movieTitle);
  });
}
