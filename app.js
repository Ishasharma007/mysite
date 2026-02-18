const product = document.querySelectorAll('.product');
const circle = document.querySelector('.scroll-progress');
const header = document.querySelector('.header');

/* ================= SCROLL PROGRESS ================= */

window.onscroll = function () {

  let progress =
    (window.scrollY /
      (document.body.scrollHeight - window.innerHeight)) * 100;

  circle.innerText = Math.floor(progress) + "%";

  if (window.scrollY > 10) {
    header.classList.add('posColor');
  } 
  else {
    header.classList.remove('posColor');
  }

};

/* ================= PRODUCT SCROLL ANIMATION ================= */

window.addEventListener('scroll', scroller);

function scroller() {

  const size = window.innerHeight / 5 * 4;

  product.forEach((box) => {

    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < size) {
      box.classList.add('scroll');
    } 
    else {
      box.classList.remove('scroll');
    }

  });

}

/* ================= TYPING EFFECT ================= */

const nameText = "ISHA SHARMA";
let charIndex = 0;

function typingEffect() {

  if (charIndex < nameText.length) {
    document.getElementById("typing").innerHTML +=
      nameText.charAt(charIndex);
    charIndex++;
    setTimeout(typingEffect, 120);
  }

}

window.onload = typingEffect;

/* ================= MOBILE NAV ================= */

const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".remove-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.add("active");
  menuBtn.style.display = "none";
  closeBtn.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  navLinks.classList.remove("active");
  closeBtn.style.display = "none";
  menuBtn.style.display = "block";
});
