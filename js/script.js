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


const tabsBtn = document.querySelectorAll(".tabs__nav-btn")
const tabsItems = document.querySelectorAll(".tabs__item")
//                       кнопка
tabsBtn.forEach(onTabClick)

function onTabClick(item) {
  item.addEventListener('click', function() {
    let currentBtn = item
    let tabId = currentBtn.getAttribute("data-tab")
    let currentTab = document.querySelector(tabId)

    if ( !currentBtn.classList.contains('active') ) {
        tabsBtn.forEach(function(item) {
        item.classList.remove('active')
      })
      tabsItems.forEach(function(item) {
        item.classList.remove('active')
      })
      currentBtn.classList.add('active')
      currentTab.classList.add('active')
    }
  })
}