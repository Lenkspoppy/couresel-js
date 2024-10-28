const slideImages = document.querySelectorAll(".slides img");
let intervalId = null;
let currentSlide = 0;

document.addEventListener("DOMContentLoaded", initializeSlide)

function initializeSlide(){
    if(slideImages.length > 0){
        slideImages[currentSlide].classList.add("active")
        intervalId = setInterval(nextSlide, 5000)
    }
   
}

function showSlide(index){

    if(index >= slideImages.length){
        currentSlide = 0
    }
    else if(index < 0){
        currentSlide = slideImages.length - 1
    }
    slideImages.forEach(slideImage => {
        slideImage.classList.remove("active")
    })

    slideImages[currentSlide].classList.add("active")
}

function prevSlide(){
    currentSlide --;
    showSlide(currentSlide)
}

function nextSlide(){
    currentSlide ++;
    showSlide(currentSlide)
}