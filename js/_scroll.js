export default function scroll() {
    const buttonRight = document.getElementById('slideRight');
    const buttonLeft = document.getElementById('slideLeft');

    buttonRight.onclick = function () {
        document.getElementById('movie-container').scrollLeft += 900;
    };
    buttonLeft.onclick = function () {
        document.getElementById('movie-container').scrollLeft -= 900;
    };
}