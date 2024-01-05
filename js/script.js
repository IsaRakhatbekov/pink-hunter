const menuBtn = document.querySelector(".header__mobile-btn")
const menuWrapper = document.querySelector(".header-mobile")
const body = document.querySelector("body")

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active')
  menuWrapper.classList.toggle('active')
  body.classList.toggle('lock')
})