
const sliderImages = document.querySelectorAll('.slider-image');


function changeActiveImage() {

    const activeImage = document.querySelector('.slider-image.active');

    if (activeImage) {
        activeImage.classList.remove('active');
    }

    
    const nextImage = activeImage ? activeImage.nextElementSibling : sliderImages[0];
    if (nextImage) {
        nextImage.classList.add('active');
    } else {
        
        sliderImages[0].classList.add('active');
    }
}


setInterval(changeActiveImage, 3000);
