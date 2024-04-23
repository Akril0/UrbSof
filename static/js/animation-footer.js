
const erth =document.querySelector('.erth-bottom')


window.onscroll = function(ev) {
   if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
      erth.style.opacity='1';
      erth.style.transform = ' translate(0, -1.6vw)';
      setTimeout(()=>{
         erth.style.animation ='7s ease-in-out 0s normal none infinite running up-down';
      }, 2000);
     
   }
};