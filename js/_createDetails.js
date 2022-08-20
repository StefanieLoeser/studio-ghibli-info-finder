export default function createDetails(movie) {

    const movieObject = movie[0];
    const infoArray = [
        `Original Movie Title: ${movieObject.original_title} / ${movieObject.original_title_romanised}`,
        `Description: ${movieObject.description}`,
        `Director: ${movieObject.director}`,
        `Producer: ${movieObject.producer}`,
        `Release Date: ${movieObject.release_date}`,
        `Running Time: ${movieObject.running_time} min`
    ];

    console.log(movieObject);

    const movieContainer = document.querySelector('[data-js=movie]');

    // describtion container
    const descriptionbox = document.createElement('ul');
    descriptionbox.classList.add('movie__container--descriptionbox');
    movieContainer.append(descriptionbox);


    // original title
    infoArray.forEach(info => {
        const listItem = document.createElement('li');
        listItem.classList.add('movie__infolist--item');
        listItem.textContent = info;
        descriptionbox.append(listItem);
    });

}