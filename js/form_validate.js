const form = document.getElementById('Contact_us');
const formName = document.getElementById('formName');
const formEmail = document.getElementById('formEmail');
const formPhone = document.getElementById('formPhome');
const formMessage = document.getElementById('formMessage');
const formAgreement = document.getElementById('formAgreement');
const thanksClose =document.querySelector('._closeThanks');
const thanks =document.querySelector('.popup-thanks');

formPhone.oninput = function(){
   this.value = this.value.replace(/[^0-9\+]/g, '');
}

const sendForm = async ()=>{
   try{

      await fetch('/',{
         headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
         },
         method: 'POST',
         body: JSON.stringify({
            [formName.name]: formName.value.trim(), 
            [formEmail.name]: formEmail.value.trim(),
            [formPhone.name]: formPhone.value.trim(),
            [formMessage.name]: formMessage.value.trim(),
         })
      }).then(response =>{
         if (response.status >= 200 && response.status < 300){
         thanks.style.visibility = "visible"
            thanks.style.transform = "scale(1)";
            thanks.style.opacity = "0.98";
         form.reset();
      }else{
         alert('Ошибка');
      }
   }
   );
   }catch(ex){
      console.error(ex);
   }
}


form.onsubmit = () => {
   let isCorrect = true,
   nameVal = formName.value.trim(),
   emailVal = formEmail.value.trim(),
   phoneVal = formPhone.value.trim();
   const validateName = name => name ==='';

   const validateEmail = email => {
      return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
   }

   const validatePhone = phone =>{
      return String(phone)
      .match(
         /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/
      );
   }

   if(validateName(nameVal)){
      formName.classList.add('error');
      isCorrect = false;
      console.log("Name error")
   }else{
      formName.classList.remove('error');
   }

   if(!validateEmail(emailVal)){
      formEmail.classList.add('error');
      isCorrect = false;
      console.log("Email error")
   }else{
      formEmail.classList.remove('error');
   }

   if(!validatePhone(phoneVal)){
      formPhone.classList.add('error');
      isCorrect = false;
      console.log("Phone error")
   }else{
      formPhone.classList.remove('error');
   }

   if(!formAgreement.checked){
      formAgreement.classList.add('error');
      isCorrect = false;
      console.log("CHecked error")
   }else{
      formAgreement.classList.remove('error');
   }


   if(isCorrect){
      sendForm();
   }

   return false;
}

thanksClose.addEventListener('click', ()=>{
   thanks.style.transform = "scale(0.5)";
   thanks.style.opacity = "0";
   setTimeout(()=>{
      thanks.style.visibility = "hidden";
   },600)
   
});