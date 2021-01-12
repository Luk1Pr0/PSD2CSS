// Box container and box elements
const boxContainer = document.querySelector('.box__container');
const boxes = document.querySelectorAll('.box-slide');

// Next and Prev buttons
const prevBtn = document.querySelector('.arrow--left');
const nextBtn = document.querySelector('.arrow--right');

let counter = 0;
const boxSize = boxes[0].clientWidth;

function initialSlide() {
    boxContainer.style.transform = 'translateX(' + (-boxSize * counter) + 'px)';
}

function slide(direction) {
    boxContainer.style.transition = `transform 0.5s ease-in-out`;
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

// Event listeners
prevBtn.addEventListener('click', () => slide('prev'));
nextBtn.addEventListener('click', () => slide('next'));