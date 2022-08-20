
// describtion container
// const descriptionbox = document.createElement('section');
// descriptionbox.classList.add('movie__container--descriptionbox');
// movie.append(descriptionbox);

// description 
const description = document.createElement('div');
description.classList.add('movie__container--description');
description.setAttribute('data-js', 'description');
description.textContent = movie.title;
descriptionbox.append(description);
// original title
const originalTitle = document.createElement('div');
originalTitle.classList.add('movie__container--originalTitle');
originalTitle.setAttribute('data-js', 'originalTitle');
originalTitle.textContent = movie.title;
descriptionbox.append(originalTitle);
// locations
const locations = document.createElement('locations');
locations.classList.add('movie__container--locations');
locations.setAttribute('data-js', 'locations');
locations.textContent = movie.title;
descriptionbox.append(locations);


// Location name
const location_name = document.createElement('div');
location_name.classList.add('movie__container__location--location_name');
location_name.setAttribute('data-js', 'location_name');
location_name.textContent = movie.title;
locations.append(location_name);

// Klima
const climate = document.createElement('div');
climate.classList.add('movie__container__location--climate');
climate.setAttribute('data-js', 'climate');
climate.textContent = movie.title;
locations.append(climate);
// Terrain
const terrain = document.createElement('div');
terrain.classList.add('movie__container__location--terrain');
terrain.setAttribute('data-js', 'terrain');
terrain.textContent = movie.title;
locations.append(terrain);

// einwohner
const residents = document.createElement('div');
residents.classList.add('movie__container__location--residents');
residents.setAttribute('data-js', 'residents');
residents.textContent = movie.title;
locations.append(residents);


// producer
const producer = document.createElement('div');
producer.classList.add('movie__container--producer');
producer.setAttribute('data-js', 'producer');
producer.textContent = movie.title;
descriptionbox.append(producer);