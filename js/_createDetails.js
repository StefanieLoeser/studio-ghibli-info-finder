export default function createDetails(movie) {
    const movieContainer = document.querySelector('[data.js=movie]');
    const descriptionbox = document.createElement('section');
    descriptionbox.classList.add('movie__container--descriptionbox');
    movieContainer.append(descriptionbox);
}