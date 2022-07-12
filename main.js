let headerDivImg = document.querySelector('#headerDivImg')
let signUp = document.querySelector('.signUp')

headerDivImg.addEventListener('click' , ()=>{
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

// let liForHeader = document.querySelectorAll('.liForHeader')

// liForHeader.addEventListener('mouseover', ()=>{
//     liForHeader.style.color = 'red'
// })
// liForHeader.addEventListener('mouseout', () => {
//     liForHeader.style.color = 'black'
// })

