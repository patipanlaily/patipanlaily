AOS.init();
AOS.refresh();

var splide = new Splide( '.splide', {
    type    : 'loop',
    autoplay: true,
});
splide.mount();

// Selector navbar class
const navbar = document.querySelector("nav.navbar");
// Set number pixel
const scrollChange = 1;
// Add class fixed top
const addClassScroll = () => navbar.classList.add("fixed-top");
// Remove class fixed top
const removeClassScroll = () => navbar.classList.remove("fixed-top");
// Set event scroll and check class change
window.addEventListener("scroll", function() {
    let scrollDown = window.scrollY;
    if (scrollDown >= scrollChange) {
        addClassScroll();
    } else {
        removeClassScroll();
    }
});

// document.querySelector(".current__mode").addEventListener("click", (e) => {
//     if(document.querySelector(".current__mode > i").classList.contains("bi-moon")) {
//         document.body.classList.remove("dark--mode");
//         document.body.classList.add("light--mode");
//         document.querySelector(".current__mode > i").classList.remove("bi-moon");
//         document.querySelector(".current__mode > i").classList.add("bi-sun");
//     } else {
//         document.body.classList.remove("light--mode");
//         document.body.classList.add("dark--mode");
//         document.querySelector(".current__mode > i").classList.remove("bi-sun");
//         document.querySelector(".current__mode > i").classList.add("bi-moon");
//     }
// });