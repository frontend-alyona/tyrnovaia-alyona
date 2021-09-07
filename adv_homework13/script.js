let btnPrev = document.querySelector('.prev');
let btnNext = document.querySelector('.next');

let slideIndex = 0;
const images = document.querySelectorAll('.slide');

const activeSlide = (i) => {
    for (let slide of images ){
        slide.classList.remove('active')
    }
        images[i].classList.add('active')
};

const handleNext = (event) => {
    if (slideIndex == images.length - 1) {
        slideIndex = 0;
        activeSlide (slideIndex);
    } else {
        slideIndex ++;
        activeSlide(slideIndex);
    }
}

const handlePrev = (event) => {
    if (slideIndex == 0) {
        slideIndex = images.length -1 
        activeSlide (slideIndex);
    } else {
        slideIndex --;
        
        activeSlide(slideIndex);
    }
};

btnNext.addEventListener('click', handleNext);
btnPrev.addEventListener('click', handlePrev);