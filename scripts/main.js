const hamburger = document.querySelector('.header__hamburger');
const nav = document.querySelector('.header__nav');
const navClose = document.querySelector('.header__nav__close');
const navItem = document.querySelectorAll('.header__nav__listitem');

const getResume = () => {
  window.open("https://drive.google.com/open?id=0B-n0w09HTR4aM1ZpOTlrXy14Q1E", '_blank');
  window.focus();
}

if (navItem) {
  navItem.forEach(function(el){
     el.addEventListener('click', function () {
      nav.style.animation = "fadeOutAnimation .7s";
      setTimeout(() => {
        nav.style.display = "none";
    }, 700);
     });
  });
}

navClose.onclick = function() {
  nav.style.animation = "fadeOutAnimation .7s";
  setTimeout(() => {nav.style.display = "none"}, 700);
}

hamburger.onclick = function() {
  if (nav.style.display === "block") {
  nav.style.display = "none";
  } else {
    nav.style.display = "block";
    nav.style.animation = "fadeInAnimation .7s";
  }
}


console.log("Welcome to my console 👋 \n List of available functions you can execute (work in progress): \n - getResume()")