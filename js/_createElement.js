export default function ghibliData(data) {
  const movies = data;
  const gallery = document.querySelector('[data-js="movie"]');
  const dropdown = document.querySelector('[data-js="dropdown"]');

  gallery.innerHTML = '';
  dropdown.selectIndex = 0;

  movies.forEach(movie => {
    const title = document.createElement('option');
    title.textContent = movie.title;
    title.setAttribute('value', movie.title);
    dropdown.append(title);

    const figure = document.createElement('figure');
    figure.classList.add('movie__container--figure');
    figure.setAttribute('data-js', 'singleMovie');
    gallery.append(figure);

    const movieImage = document.createElement('img');
    movieImage.src = movie.image;
    movieImage.setAttribute('alt', '');
    movieImage.classList.add('movie__container--image');
    figure.append(movieImage);

    const movieTitle = document.createElement('figcaption');
    movieTitle.textContent = movie.title;
    movieTitle.setAttribute('data-js', 'caption');
    figure.append(movieTitle);
  });
}
