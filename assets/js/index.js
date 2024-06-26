$(document).ready(function () {
      $('.hero-heading').slick({
            dots: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear',
      });
});

$('.nav-links li').click(function () {
      $(this)
            .addClass('nav-link--active')
            .siblings()
            .removeClass('nav-link--active');
});

$('.nav-mobile-links li').click(function () {
      $(this)
            .addClass('nav-link--active')
            .siblings()
            .removeClass('nav-link--active');
});

$('.nav-burger').click(function () {
      const navMobileMenu = document.querySelector('.nav-mobile-links');
      if (navMobileMenu.style.display === 'block') {
            navMobileMenu.style.display = 'none';
      } else {
            navMobileMenu.style.display = 'block';
      }
});

let dropDownMobile = document.querySelector('.dropdown--mobile');
let dropDownMobileContent = document.querySelector('.dropdown-content--mobile');
let dropDown = document.querySelector('.dropdown');
let dropDownContent = document.querySelector('.dropdown-content');

dropDownMobile.addEventListener('click', function () {
      if (dropDownMobileContent.style.display === 'block') {
            dropDownMobileContent.style.display = 'none';
      } else {
            dropDownMobileContent.style.display = 'block';
      }
});

dropDown.addEventListener('click', function () {
      if (dropDownContent.style.display === 'block') {
            dropDownContent.style.display = 'none';
      } else {
            dropDownContent.style.display = 'block';
      }
});

$('.about-disc').mouseover(function () {
      $('.about-img__img').css('transform', 'scale(1.3)');
});

$('.about-disc').mouseleave(function () {
      $('.about-img__img').css('transform', 'scale(1)');
});

$('.about-disc__cross').click(function () {
      document.querySelector('.about-img').style.display = 'none';
      document.querySelector('.about-disc').style.display = 'none';
});
const lightbox = GLightbox({   touchNavigation: true,
      loop: true,
      autoplayVideos: true });
  
      document.addEventListener('DOMContentLoaded', function() {
          AOS.init({
              duration: 800, // Adjust as needed
              easing: 'ease-in-out', // Adjust as needed
          });
  
          var swiper = new Swiper('.swiper-container', {
              speed: 400,
      loop: true,
      rtl:true,
      centeredSlides: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        992: {
          slidesPerView: 5,
          spaceBetween: 20
        }
      }
          });
      });