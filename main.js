let headerDivImg = document.querySelector('#headerDivImg')
let signUp = document.querySelector('.signUp')

headerDivImg.addEventListener('click', () => {
    signUp.classList.toggle('toggle')
})

let inputSearch = document.querySelector('.inputSearch')
let imgForSearch = document.querySelector('.imgForSearch')
let hasPlaceholder = false


imgForSearch.addEventListener("click", function () {
    inputSearch.classList.toggle("myStyle")
    if (hasPlaceholder == true) {
        inputSearch.removeAttribute("placeholder")
        hasPlaceholder = false
    } else {
        inputSearch.setAttribute("placeholder", "search")
        hasPlaceholder = true
    }
})



let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}



function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
   
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
   
    slides[slideIndex - 1].style.display = "flex";
   
}