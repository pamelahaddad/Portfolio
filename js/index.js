// projects.js
// structure: 
//   - Const 
//   - Events

'use strict'

// JavaScript for the Hamburger menu button

// Selection of the hamburger button of the header
const headerButton = document.querySelector('.Header-button')
// Selection of the navigation bar of the header
const headerNav = document.querySelector('.Header-nav')

// Events happening when I click the hamburger button
  // When I CLICK on the headerButton it does a FUNCTION
  // headerNav does a TOGGLE
  // headerButton does a TOGGLE

headerButton.addEventListener('click' , ()=>{
    headerNav.classList.toggle('isActive')
})