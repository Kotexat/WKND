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
cardFirst.addEventListener('mouseover', () => {
    sectionFourthDiv.classList.add('newImage')
    sectionFourthDiv.classList.remove('newImage1')
    sectionFourthDiv.classList.remove('newImage2')
    sectionFourthDiv.classList.remove('newImage3')
})

cardSecond.addEventListener('mouseover', () => {
    sectionFourthDiv.classList.add('newImage1')
    sectionFourthDiv.classList.remove('newImage')
    sectionFourthDiv.classList.remove('newImage2')
    sectionFourthDiv.classList.remove('newImage3')
})

cardThird.addEventListener('mouseover', () => {
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


button.addEventListener('click', () => {
    if (input.value === "") {
        alert("Error")
    } else if (!input.value.includes('@') || !input.value.includes('.')) {
        alert('incorrect format')
    } else {
        alert('success')
    }

})


let cards = [{ img: "./Images/1.png", text1: "ULTIMATE GUIDE TO LA", text2: "SKATEPARKS" },
{ img: "./Images/2.png", text1: "SKIITOURING", text2: "Sofia Sjöberg" },
{ img: "./Images/3.png", text1: "ARCTIC SURFING", text2: "Jacob Wester" },
{ img: "./Images/4.png", text1: "SAN DIEGO SURF SPOTS", text2: "Justin Barr" },
]

let sectionThirdDiv = document.querySelector('.sectionThirdDiv')
let rect = sectionThirdDiv.getBoundingClientRect()

document.addEventListener('scroll', ()=>{
    if (window.scrollY = rect.top){
        sectionThirdDiv.classList.add("anime")
    }
})


for (let i = 0; i < cards.length; i++) {

    let card = document.createElement('div')
    card.classList.add('card')
    sectionThirdDiv.appendChild(card)
    let photo = document.createElement('img')
    photo.classList.add('photo')
    card.appendChild(photo)
    photo.src = cards[i].img
    let text1 = document.createElement('p')
    text1.classList.add('text1')
    card.appendChild(text1)
    text1.innerHTML = cards[i].text1
    let text2 = document.createElement('p')
    text2.classList.add('text2')
    card.appendChild(text2)
    text2.innerHTML = cards[i].text2
}

