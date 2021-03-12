// active links
const links = document.querySelectorAll('.nav-link-cus');
const sections = document.querySelectorAll('.section');

function changeLinkState() {
    let index = sections.length;

    while (--index && window.scrollY + 30 < sections[index].offsetTop) {}

    links.forEach((link) => link.classList.remove('activv'));
    links[index].classList.add('activv');
}

changeLinkState();
window.addEventListener('scroll', changeLinkState);



// navbar toggler
let togglerBtn = document.querySelector(".navbar-toggler");
let spanToggler = document.querySelector("#nav-toggle");
let currentSrc = spanToggler.src;
let closeBtn = "imgs/close.svg";
togglerBtn.onclick = function() {
    if (spanToggler.src === currentSrc) {
        spanToggler.src = closeBtn;
    } else {
        spanToggler.src = currentSrc;

    }
}



// to top btn 
let topBtn = document.getElementById("to-top");
window.onscroll = function() {
    if (window.pageYOffset >= 500) {
        topBtn.style.display = "block"
    } else {
        topBtn.style.display = "none"
    }
}
topBtn.onclick = function() {
    "use strict"
    window.scrollTo(0, 0);
};