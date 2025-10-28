const popupButton = document.querySelector('.popup_button');
const popup = document.querySelector('.popup');
const popupClose =document.querySelectorAll('._closePopup');


popupButton.addEventListener('click', ()=>{
   popup.style.opacity = " 0.98";
   popup.style.transform = "translate(0,0)";
   popup.style.visibility = "visible";
});

popupClose.forEach(el=>{el.addEventListener('click', ()=>{
   popup.style.transform = "translate(100%,0)";
      popup.style.opacity = "0";
      setTimeout(()=>{
      popup.style.visibility = "hidden";
   },600)
})
});


