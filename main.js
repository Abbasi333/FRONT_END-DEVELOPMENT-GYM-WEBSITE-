
//show nav bar

const nav=document.querySelector('.nav');
const toggle=document.querySelector('.nav-toggle');

toggle.onclick=()=>
{
    nav.classList.toggle('show-menu');
}

//remove menubar

const navlink = document.querySelectorAll('.navlink');
function linkAction() {
    const navMenu=document.querySelector('.nav');
    nav.classList.remove('show-menu')
}

navlink.forEach(n=>n.addEventListener('click', linkAction))

//change color link

const linkColor=document.querySelectorAll('.nav-link');
function colorLink(){
    if(colorLink){
        linkColor.forEach(l => l.classList.remove('active'));
        this.classList.add('active')
    }
}
linkColor.forEach(l =>l.addEventListener('click',colorLink))

/*swipe home*/

var swiper = new Swiper(".home-slider", {
    loop:true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  //swiper scheduale section
  var swiper = new Swiper(".time-imgs", {
    loop:true,
    spaceBetween: 0,
    grapCursor: true,
    autoplay: {
      delay: 2500,
      
    },
    breakpoints:{
      0:{
        slidesPerView:1,
      },
    
    640:{
      slidesPerView:3,
    },
    768:{
      slidesPerView:4,
    },
    1024:{
      slidesPerView:5,
    },
  }
  });


  //change header background when scroll

  const header = document.querySelector('.header')
  window.addEventListener('scroll', ()=>{
     if(window.scrollY >70){
      header.classList.add('header-shadow')
     }
     else  header.classList.remove('header-shadow')
  });
  //scroll top button

  const up =document.querySelector('.up')
  window.onscroll=()=>{
    up.classList.toggle('show', window.scrollY >=560)
  }
  up.onclick =() =>{
    window.scrollTo({behavior:'smooth', top: '0'})
  }