const api = 'https://ghibliapi.herokuapp.com/films/';

fetch(api)
  .then(response => response.json())
  .then(data => ghibliData(data));

export default function ghibliData(data) {
  const movies = data;
  const dropdown = document.querySelector('[data-js="dropdown"]');
  
  movies.forEach(movie => {
    const title = document.createElement('option');
    title.setAttribute('value', 'title.value');
    title.textContent = title.value;
    console.log(title);
  });
  

  console.log(movies);
}
