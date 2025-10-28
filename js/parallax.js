'use strict'

const parallax =document.querySelector('.parallax');

if(parallax){
    const buble = document.querySelector('.images-parallax__buble');
    const clouds = document.querySelector('.images-parallax__clouds');

    const forBuble = 25;
    const forClouds = 65;
    
    const speed =0.2;

    let positionX = 0, positionY=0;
    let coordXprocent=0, coordYprocent =0;

    function setMouseParallaxStyle(){
        const distX =coordXprocent - positionX;
        const distY =coordYprocent - positionY;

        positionX +=(distX * speed);
        positionY +=(distY * speed);

        buble.style.cssText = `transform: translate(${positionX/forBuble}%, ${positionY/forBuble}%);`;
        clouds.style.cssText = `transform: translate(${-positionX/forClouds}%, ${-positionY/forClouds}%);`;

        requestAnimationFrame(setMouseParallaxStyle);
    }
    setMouseParallaxStyle()
    parallax.addEventListener("mousemove", e =>{
        const parallaxWidth = parallax.offsetWidth;
        const parallaxHeight = parallax.offsetHeight;

        const coordX = e.pageX - parallaxWidth/2;
        const coordY = e.pageY - parallaxHeight/8;

        coordXprocent = coordX / parallaxWidth * 100;
        coordYprocent = coordY / parallaxHeight * 100;
        });
}
