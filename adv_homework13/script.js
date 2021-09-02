let btnPrev = document.querySelector('#gallery .buttons .prev');
let btnNext = document.querySelector('#gallery .buttons .next');
let images = document.querySelectorAll('#gallery .photos img');

let i = 0; 
    

if(i >= images.length){
    i = 0; 

}


const handleClick = (event) => {
    images[i].style.display = 'none';
    i = i - 1;
    if(i < 0){
        i = images.length - 1;
    }
    images[i].style.display = 'block';
}
    btnPrev.addEventListener('click', handleClick) ;
    btnNext.addEventListener('click', handleClick) ;


