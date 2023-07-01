// hamburger menu

let hamIcon=document.getElementById('hamburger-icon');
let mainMenu=document.getElementById('main-menu');

hamIcon.addEventListener('click',function () {
    mainMenu.classList.toggle('active');
})
// swiper

var swiper = new Swiper(".mainSwiper",{
    direction:"vertical",
    loop:true,
    slidesPerView:1,
    spaceBetween:30,
    mousewheel:true,
    pagination:{
        el:".swiper-pagination",
        clickable:true,
    },
})

var swiper2 = new Swiper(".banner", {
    slidesPerView: 1,
    autoplay:true,
    spaceBetween: 29
});
var swiper3 = new Swiper(".shop", {
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
    }
});
var swiper4 = new Swiper(".food", {
    slidesPerView: 1,
    spaceBetween: 29,
    autoplay:true,
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1380: {
            slidesPerView: 3,
        }
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
// tab
let tabs=Array.from(document.querySelectorAll('.tabs-group span'))
let tabsContent=Array.from(document.querySelectorAll('.tabs-content'))

tabs.forEach((tab) => {
    tab.addEventListener('click', function() {
        tabs.forEach((tabs) => {tabs.classList.remove('active')});
        tab.classList.add('active');
        let tabId = tab.dataset.id;
        tabsContent.forEach((content) => {
            let contentId = content.dataset.id;
            if (tabId === contentId) {
                content.classList.add('active');
            } else {
                content.classList.remove('active');
            }
        })
    })
})