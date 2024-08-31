const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const captionText = document.getElementById('caption-text');

let currentIndex = 0;
const totalImages = images.length;

// Add your captions here
const captions = [
    "Welcome ",  // Caption for Image 1
    "Explore the beauty ",  // Caption for Image 2
    " Nature's Spectacular Light Show"  // Caption for Image 3
];

function showSlide(index) {
    slides.style.transform = `translateX(${-index * 100}%)`;
    captionText.innerText = captions[index]; // Update the caption text
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? totalImages - 1 : currentIndex - 1;
    showSlide(currentIndex);
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === totalImages - 1) ? 0 : currentIndex + 1;
    showSlide(currentIndex);
});

setInterval(() => {
    currentIndex = (currentIndex === totalImages - 1) ? 0 : currentIndex + 1;
    showSlide(currentIndex);
}, 3000);

// Initial display
showSlide(currentIndex);
