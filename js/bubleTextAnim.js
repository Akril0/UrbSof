const bubleTextUp = document.querySelectorAll('.buble-letter-up');
const bubleTextDown = document.querySelectorAll('.buble-letter-down');
const xStep=2.1;
const xTranslate = -10;
let xPoint=0+xStep*xTranslate;

const bubleFuncUp=(xPoint, xStep)=>{
   let x2 = xPoint;
   let x1 = x2-xStep;
   let y1 =  -0.0001*(1.2*Math.pow(x1-70, 3)+80*Math.pow(x1-70, 2));

   for(let letter of bubleTextUp){

      if(x2 > (xStep*(bubleTextUp.length + xTranslate))){
         x2=x2 - xStep*bubleTextUp.length;
          x1 = x2-xStep;
          y1 =  -0.0001*(1.2*Math.pow(x1-70, 3)+80*Math.pow(x1-70, 2));
      }

      let y2 = -0.0001*(1.2*Math.pow(x2-70, 3)+80*Math.pow(x2-70, 2));
      let rad = Math.atan((y2 - y1)/(x2-x1));

      letter.style.transform=`translate(${x2}vw, ${-y2}vw) rotate(${-rad}rad)`;

      if(x2>71 && x2<78|| x2 > 100 || x2<-2.1 ){
         letter.style.opacity=0;
      }else if((x2>69 && x2<=71)||
               (x2>=78&&x2<80)){
                  letter.style.opacity=0.5;
      }else{
         letter.style.opacity=1;
      }

      if(x2>100 || x2<-2.1){
         letter.style.visibility = "hidden";
      }else{
         letter.style.visibility = "visible";
     }

      y1=y2;
      x1=x2;
      x2+=xStep;
   }
}


const bubleFuncDown=(xPoint, xStep)=>{
   let x2 = xPoint;
   let x1 = x2-xStep;
   let y1 = -13*Math.sin(0.04*x1+1)-10;

   for(let letter of bubleTextDown){
      if(x2 > (xStep*(bubleTextUp.length+xTranslate))){
         x2=x2 - xStep*bubleTextUp.length;
          x1 = x2-xStep;
          y1 = -13*Math.sin(0.04*x1+1)-10;
      }

      let y2 = -13*Math.sin(0.04*x2+1)-10;
      let rad = Math.atan((y2 - y1)/(x2-x1));

      letter.style.transform=`translate(${x2}vw, ${-y2}vw) rotate(${-rad}rad)`;

      if(x2 > 100 || x2<-2.1 ){
         letter.style.opacity=0;
      }else{
         letter.style.opacity=1;
      }
      
      if(x2>100 || x2<-2.1){
         letter.style.visibility = "hidden";
      }else{
         letter.style.visibility = "visible";
     }

     if(x2>4&&x2<25.4){
      letter.style.color="#43B5E3";
     }else{
      letter.style.color="#2A0D82";
     }
      y1=y2;
      x1=x2;
      x2+=xStep;
   }
}

bubleFuncDown(xPoint, xStep);
bubleFuncUp(xPoint, xStep);

setTimeout(()=>{
   bubleTextUp.forEach((el)=>{el.style.transition="visibility 1s linear, transform 1s linear, opacity 1s linear"});
   bubleTextDown.forEach((el)=>{el.style.transition="color 1s linear, visibility 1s linear, transform 1s linear, opacity 1s linear"});
},900);

setInterval(()=>{ 
   xPoint+=xStep;
   if(xPoint > (xStep*(bubleTextUp.length+xTranslate))){
      xPoint=xPoint - xStep*bubleTextUp.length;
   }
   bubleFuncUp(xPoint, xStep);
   bubleFuncDown(xPoint, xStep);

}, 1000);

