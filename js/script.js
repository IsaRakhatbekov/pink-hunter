const swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
    direction: 'horizontal',
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

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



const contactsTabsBtn = document.querySelectorAll(".contacts__tabs-btn")
const contactsTabsItems = document.querySelectorAll(".contacts__tabs-item")
tabsBtn.forEach(onTabClick)

function onTabClick(item) {
  item.addEventListener('click', function() {
    console.log("work")
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



const contactsName = document.querySelector("#name")
const contactsNameSpan = document.querySelector("#nameSpan")

const contactsPost = document.querySelector("#post")
const contactsPostSpan = document.querySelector("#postSpan")

const getInTouch = document.querySelector("#get-in-touch")
const getInTouchSpan = document.querySelector("#get-in-touchSpan")

const contactsResume = document.querySelector("#resume")
const contactsResumeSpan = document.querySelector("#resumeSpan")

const contactsBtn = document.querySelector(".contacts-employer__btn")

if (contactsBtn) {
  contactsBtn.addEventListener('click', (e) => {
    e.preventDefault()

    if (contactsName.value && contactsName.value.trim()) { 
      // contactsName.classList.remove("error")
      contactsNameSpan.classList.remove("error")
    } else {
      // contactsName.classList.add("error")
      contactsNameSpan.classList.add("error")
    }

  })
}