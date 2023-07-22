// projects.js
// structure: 
//   - Const 
//   - Variables
//   - Functions
//   - Events

'use strict'

// JavaScript for the Hamburger menu button


// Selection of the hamburger button of the header
const headerButton = document.querySelector('.Header-button')
// Selection of the navigation bar of the header
const headerNav = document.querySelector('.Header-nav')

// Events happening when I click the hamburger button
  // When I CLICK on headerButton it does a FUNCTION
  // headerNav does a TOGGLE
  // headerButton does a TOGGLE

headerButton.addEventListener('click' , ()=>{
    headerNav.classList.toggle('isActive')
    headerButton.classList.toggle('isActive')
})


// Script fot the Slider in the About page for the Posh section

let sliderActive = 0
// Selection of the next button of the slider
const sliderNext = document.querySelector('.Posh-next')
// Selection of the prev button of the slider
const sliderPrev = document.querySelector('.Posh-prev')
// Selection of all the images of the slider
const sliderImgsList = document.querySelectorAll('.Slider-imgs')

// Creating the variable set Active as a function to be used in the event 
let setActive = ()=>{
    sliderImgsList.forEach(( eachImg , i )=>{
        sliderImgsList[i].classList.remove('isActive')
    })
    sliderImgsList[sliderActive].classList.add('isActive')
}
// Events when i click next in the slider
  //When I CLICK sliderNext it does a FUNCTION
    // sliderActive ++
    // If sliderActive > or = to 6
      // sliderActive is equal to 0
    // sliderImgsList in position i REMOVE the class isActive
    // sliderImgsList with the position sliderActive ADD the class isActive

sliderNext.addEventListener('click' , ()=>{
    sliderActive++

    if( sliderActive >=6 ){
        sliderActive=0
    }

    setActive()
})
// Events when i click prev in the slider
   //When I CLICK sliderPrev it does a FUNCTION
    // sliderActive --
    // If sliderActive is < or equal to -1
     // sliderActive = 5
    // sliderImgsList in position i will REMOVE the class isActive
   // sliderImgsList in position sliderActive will ADD the class isActive

sliderPrev.addEventListener('click' , ()=>{
    sliderActive --

    if( sliderActive <= -1 ){
        sliderActive=5
    }

    setActive()
})