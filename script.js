// locomotive js
function show() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  locoScroll.on("scroll", ScrollTrigger.update);
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}


show(); //function calling for locomotive js.


//about section
  var flag=1;
  document.querySelector("#kb1").addEventListener("click",function(){
    document.querySelector(".kub2").style.display="none";
    document.querySelector(".kub3").style.display="none";
    document.querySelector(".kub1").style.display="initial";
    if(flag===1){
      document.querySelector(".kub1").style.display="initial";
  flag=0;
  }
  else{
    flag=1;
  }
  });
  document.querySelector("#kb2").addEventListener("click",function(){
    document.querySelector(".kub1").style.display="none";
    document.querySelector(".kub3").style.display="none";
    document.querySelector(".kub2").style.display="initial";
    if(flag===1){
      document.querySelector(".kub2").style.display="initial";
  flag=0;
  }
  else{
    flag=1;
  }
  });
  document.querySelector("#kb3").addEventListener("click",function(){
    document.querySelector(".kub1").style.display="none";
    document.querySelector(".kub2").style.display="none";
    document.querySelector(".kub3").style.display="initial";
    if(flag===1){
      document.querySelector(".kub3").style.display="initial";
  flag=0;
  }
  else{
    flag=1;
  }
  });

//swiperjs
    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      grabcursor:true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

//cursor poition
    const cursor = document.querySelector('#cursor')
            document.addEventListener('mousemove', (e) => {
              cursor.style.left = e.pageX + 'px';
              cursor.style.top = e.pageY + 'px';
    })

//mail
function composeEmail() {
  window.location.href = 'mailto:kuber8821@gmail.com';
}

gsap.from("#line",{
  opacity:0,
  duration:1,
  onStart:function(){
    $('#line').textillate({ in: { effect: 'fadeInUp' } });
  }
})

gsap.from("#name",{
  opacity:0,
  duration:1,
  onStart:function(){
    $('#name').textillate({ in: { effect: 'fadeInUp' } });
  }
})

gsap.from("#name2",{
  opacity:0,
  duration:1,
  onStart:function(){
    $('#name2').textillate({ in: { effect: 'fadeInUp' } });
  }
})


document.addEventListener('DOMContentLoaded', function () {
  gsap.from("#nav", { y: -100, opacity: 0, duration: 1, ease: "power2.out" });
});

gsap.from(".about>h3",{
  y:20,
  stagger:0.5,
  delay:2,
  //scrub:true
})


var tl = gsap.timeline();


tl.from("#line1",{
 
  scrollTrigger:{
    scroller:"#main",
   trigger:"#abo",
   start:"top 50%",
   end:"top 30%",
   //markers:true
  },
  opacity:0,
  duration:1,
  // delay:1,
  onStart:function(){
    $('#line1').textillate({ in: { effect: 'fadeInUp' } });
  }
},"same")
tl.from("#skills",{
  scrollTrigger:{
    scroller:"#main",
   trigger:"#abo",
   start:"top 50%",
  },
  opacity:0,
  duration:1,
  onStart:function(){
    $('#skills').textillate({ in: { effect: 'fadeInUp' } });
  }
},"same")
tl.from("#skills2",{
  scrollTrigger:{
    scroller:"#main",
   trigger:"#abo",
   start:"top 50%",
  },
  opacity:0,
  duration:1,
  onStart:function(){
    $('#skills2').textillate({ in: { effect: 'fadeInUp' } });
  }
},"same")


tl.from("#line2",{
  scrollTrigger:{
    scroller:"#main",
   trigger:"#projects",
   start:"top 50%",
  },
  opacity:0,
  duration:1,
  onStart:function(){
    $('#sline2').textillate({ in: { effect: 'fadeInUp' } });
  }
},"same")


tl.from("#project",{
  scrollTrigger:{
    scroller:"#main",
   trigger:"#projects",
   start:"top 50%",
  },
  opacity:0,
  duration:1,
  onStart:function(){
    $('#project').textillate({ in: { effect: 'fadeInUp' } });
  }
},"same")
tl.from("#works",{
  scrollTrigger:{
    scroller:"#main",
   trigger:"#projects",
   start:"top 50%",
  },
  opacity:0,
  duration:1,
  onStart:function(){
    $('#works').textillate({ in: { effect: 'fadeInUp' } });
  }
},"same")


tl.from("#keepin",{
  scrollTrigger:{
    scroller:"#main",
   trigger:"#hey",
   start:"top 50%",
  },
  opacity:0,
  duration:1,
  onStart:function(){
    $('#keepin').textillate({ in: { effect: 'fadeInUp' } });
  }
},"same")
tl.from("#sayhi",{
  scrollTrigger:{
    scroller:"#main",
   trigger:"#hey",
   start:"top 50%",
  },
  opacity:0,
  duration:1,
  onStart:function(){
    $('#sayhi').textillate({ in: { effect: 'fadeInUp' } });
  }
},"same")
// function textillate(){
//   $(document).ready(function(){
//     $("#kb1").textillate({
//       in:{
//         effect:"fadeInDownBig",
//         delayScale:3,
//       },
//       out:{
//         effect:"bounceOut",
//         delayScale:2,
//       }
//     })
//   })
// }

//animation pixels
const container = document.querySelector('.container');
  const overlay = document.querySelector('.overlay');
  const image = document.querySelector('.container > img');
  const pixels = [];

  // Function to create pixels
  function createPixels() {
    const rows = Math.floor(image.clientHeight / 10);
    const cols = Math.floor(image.clientWidth / 10);
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        const pixel = document.createElement('div');
        pixel.classList.add('pixel');
        pixel.style.top = `${i * 10}px`;
        pixel.style.left = `${j * 10}px`;
        pixel.style.backgroundImage = url('${image.src}');
        pixel.style.backgroundSize = `${image.clientWidth}px ${image.clientHeight}px`;
        pixel.style.backgroundPosition = `-${j * 10}px -${i * 10}px`;
        pixels.push({element: pixel, x: 0, y: 0});
        overlay.appendChild(pixel);
      }
    }
  }

  // Update pixel positions on container hover
  function updatePixels(e) {
    pixels.forEach((pixelData) => {
      const pixel = pixelData.element;
      const rect = pixel.getBoundingClientRect();
      const dx = e.clientX - (rect.left + rect.width / 2);
      const dy = e.clientY - (rect.top + rect.height / 2);
      const distance = Math.sqrt(dx * dx + dy * dy);
      const maxDistance = Math.sqrt(container.clientWidth * container.clientWidth + container.clientHeight * container.clientHeight);
      const strength = 1 - distance / maxDistance;
      const translateX = strength * 30 * (dx / distance);
      const translateY = strength * 30 * (dy / distance);
      pixelData.x = translateX;
      pixelData.y = translateY;
    });
  }

  function animatePixels() {
    pixels.forEach((pixelData) => {
      const pixel = pixelData.element;
      const translateX = pixelData.x;
      const translateY = pixelData.y;
      pixel.style.transform = translate(`${translateX}px, ${translateY}px`);
    });
    requestAnimationFrame(animatePixels);
  }

  // Reset pixel positions when mouse leaves the container
  function resetPixels() {
    pixels.forEach((pixelData) => {
      pixelData.x = 0;
      pixelData.y = 0;
    });
  }

  // Create pixels on window load
  window.onload = function() {
    createPixels();

    container.addEventListener('mousemove', (e) => {
      updatePixels(e);
    });

    container.addEventListener('mouseleave', () => {
      resetPixels();
    });

    animatePixels();
  };

  var momo=document.getElementById("momo");
  momo.onclick=function(){
    document.body.classList.toggle("dark-theme");
  }