const track = document.querySelector('.carousel-track');
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');

let currentIndex = 0;

function updateCarousel() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

prevButton.addEventListener('click', () => {
    currentIndex = Math.max(0, currentIndex - 1);
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    currentIndex = Math.min(track.children.length - 1, currentIndex + 1);
    updateCarousel();
});


