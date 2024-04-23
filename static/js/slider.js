new Swiper('.works-slider',{
   mousewheel:{
      sensitivity: 1,
      eventsTarget: ".slide-swap",
      releaseOnEdges: 1
   },
   slidesPerView: (window.innerWidth > 520)? 1.05 : 1,
   simulateTouch:false,
   speed: 600
});



