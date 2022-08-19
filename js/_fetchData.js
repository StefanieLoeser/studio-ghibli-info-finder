const api = 'https://ghibliapi.herokuapp.com/films/';

export default async function saveMovies() {
  return fetch(api)
    .then(response => response.json())
    .then(data => data);
}

export const movieData = await saveMovies();

console.log(movieData);
