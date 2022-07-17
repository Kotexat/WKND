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



cardFirst = document.querySelector('.cardFirst')
cardSecond = document.querySelector('.cardSecond')
cardThird = document.querySelector('.cardThird')
cardFourth = document.querySelector('.cardFourth')

sectionFourthDiv = document.querySelector('.sectionFourthDiv')
cardFirst.addEventListener('mouseover', ()=>{
    sectionFourthDiv.classList.add('newImage')
    sectionFourthDiv.classList.remove('newImage1')
    sectionFourthDiv.classList.remove('newImage2')
    sectionFourthDiv.classList.remove('newImage3')
})

cardSecond.addEventListener('mouseover' , ()=>{
    sectionFourthDiv.classList.add('newImage1')
    sectionFourthDiv.classList.remove('newImage')
    sectionFourthDiv.classList.remove('newImage2')
    sectionFourthDiv.classList.remove('newImage3')
})

cardThird.addEventListener('mouseover' , ()=>{
    sectionFourthDiv.classList.add('newImage2')
    sectionFourthDiv.classList.remove('newImage1')
    sectionFourthDiv.classList.remove('newImage')
    sectionFourthDiv.classList.remove('newImage3')
})

cardFourth.addEventListener('mouseover', () => {
    sectionFourthDiv.classList.add('newImage3')
    sectionFourthDiv.classList.remove('newImage1')
    sectionFourthDiv.classList.remove('newImage')
    sectionFourthDiv.classList.remove('newImage2')
})






let input = document.querySelector('.email-validation input')
let button = document.querySelector('.email-validation button')
var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

button.addEventListener('click' , ()=>{
    if (input.value === ""){
         alert ("Error")
    } 

})

