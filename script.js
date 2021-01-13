// Box container and box elements
const boxContainer = document.querySelector('.box__container');
const boxes = document.querySelectorAll('.box-slide');

// Next and Prev buttons
const prevBtn = document.querySelector('.arrow--left');
const nextBtn = document.querySelector('.arrow--right');

let counter = 0;
const boxSize = boxes[0].clientWidth;

// Set transition and determine which way to slide the boxes
function slide(direction) {
    boxContainer.style.transition = 'transform 0.5s ease-in-out';
    // If direction is prev, then display the left box else display the box on the right
    if (direction === 'prev') {
        if (counter <= -1) return;
        counter--;
        boxContainer.style.transform = 'translateX(' + (-boxSize * counter) + 'px)';
    } else {
        if (counter >= boxes.length - 2) return;
        counter++;
        boxContainer.style.transform = 'translateX(' + (-boxSize * counter) + 'px)';
    }
}

// Event listeners (not able to use arrow functions as they are not supported in IE11)
prevBtn.addEventListener('click', function () { slide('prev') });
nextBtn.addEventListener('click', function () { slide('next') });
window.addEventListener('resize', function () { location.reload() });