const product = document.querySelectorAll('.product');

const cirlce = document.querySelectorAll('.scroll-progress');

Window.onscroll = function () {
    const emelent = document.querySelectorAll('.header');

    let progress = (window.scrollY / (Document.body.scrollHeight - window.innerHeight)) * 100;
    cirlce.innerText = Math.random(progress) + "%";

    if (Window.scrollY > 10){
        window.classlist.add('poscolor');
    }
    else {
        window.classlist.remove('poscolor');
    }

};
window.addEventListener('scroll', scroller);
function scroller(){
    const size =window.innerHeight / 5 * 4;
    product.foreach((box) =>{
    const boxTop = box.getboundingclientrect().top;
if( boxTop < size ){
box.classlist.add('scroll')
}
else{
    box.classlist.remove('scroll')
}


    })
}
// text
const nameText = "ISHA SHARMA";
let charIndex = 0;

function typingEffect() {
  if (charIndex < nameText.length) {
    document.getElementById("typing").innerHTML += nameText.charAt(charIndex);
    charIndex++;
    setTimeout(typingEffect, 120);
  }
}

window.onload = typingEffect;

