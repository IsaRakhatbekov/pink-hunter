const menuBtn = document.querySelector(".header__mobile-btn")
const menuWrapper = document.querySelector(".header-mobile")
const body = document.querySelector("body")

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active')
  menuWrapper.classList.toggle('active')
  body.classList.toggle('lock')
})


const header = document.querySelector("header")

window.addEventListener('scroll', function() {
  if (pageYOffset > 1) {
    header.classList.add('active')
  } else {
    header.classList.remove('active')
  }
})

// window.addEventListener('scroll', function() {
//   if (pageYOffset > 50) {
//     header.classList.add('active')
//   } else {
//     header.classList.remove('active')
//   }
// })