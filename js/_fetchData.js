export default function readData() {
    const api = 'https://ghibliapi.herokuapp.com';

    fetch(api)
        .then(response => response.json())
        .then(data => console.log(data));
}
