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



let slideShow = document.querySelector('.slideShow')
let slideImages = document.querySelectorAll('.slideShow img')
let prevBtn = document.querySelector('#prevBtn')
let nextBtn = document.querySelector('#nextBtn')




let counter = 1
let size = slideImages[0].clientWidth;

slideShow.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextBtn.addEventListener('click', () => {
    console.log('test');
    if (counter >= slideImages.length - 1) return;
    slideShow.style.transition = 'transform 0.4s ease-in-out';
    counter++;
    slideShow.style.transform = 'translateX(' + (-size * counter) + 'px)';
})

prevBtn.addEventListener('click', () => {
    if (counter <= 0) return;
    slideShow.style.transition = 'transform 0.4s ease-in-out';
    counter--;
    slideShow.style.transform = 'translateX(' + (-size * counter) + 'px)';
})

slideShow.addEventListener('transitionend', () => {
    if (slideImages[counter].id === 'lastClone') {
        slideShow.style.transition = 'none'
        counter = slideImages.length - 2;
        slideShow.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if (slideImages[counter].id === 'firstClone') {
        slideShow.style.transition = 'none'
        counter = slideImages.length - counter;
        slideShow.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
})