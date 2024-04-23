const compass = document.querySelectorAll('.button-compas');
const buttonBlick = document.querySelectorAll('.button__blick');
const compasHref = document.querySelectorAll('.compas-href');
for(let i=0; i < compasHref.length; i++){
   compasHref[i].addEventListener("mouseenter", ()=>{
      buttonBlick[i].classList.add('hovered');
   });

   compasHref[i].addEventListener("mouseleave", ()=>{
      buttonBlick[i].classList.remove('hovered');
      compass[i].classList.remove('clicked')
   });

   compasHref[i].addEventListener("mousedown", ()=>{
      compass[i].classList.add('clicked');
   });
   
   compasHref[i].addEventListener("mouseup", ()=>{
      compass[i].classList.remove('clicked');
   });
}

function rotateWord(value){
   const circleWord = document.querySelectorAll('.circle__word');

   deg = -120;
   for(let word of circleWord){
      word.style.transform = `rotate(${deg}deg)`;
      deg+=value;
   }
   return value;
}

rotateWord(10)

function rotateLetter(value){
   const circleLetter = document.querySelectorAll('.cirle_letter');

   deg = 0;
   for(let letter of circleLetter){
      letter.style.transform = `rotate(${deg}deg)`;
      deg+=value;
   }
   return value;
}

rotateLetter(8.9)