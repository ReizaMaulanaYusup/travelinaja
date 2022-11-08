// ================ NAVLINK AKTIF ================ 
const navbar = document.querySelector('.navbar-nav');

navbar.addEventListener('click', function(e) {
   const  targetNavbar = e.target;

   if(targetNavbar.classList.contains('nav-link')) {
      const menuLinkActive = document.querySelector('ul li a.active');
      if(menuLinkActive !== null && targetNavbar.getAttribute('href') !== menuLinkActive.getAttribute('href)')) {
         menuLinkActive.classList.remove('active');
      }
      targetNavbar.classList.add('active');
   }
});

// ================ SCROLL TO TOP BUTTON ================ 
// GET THE BUTTON
var mybutton = document.getElementById('myBtn');

// SAAT USER SCROLL KE BAWAH 20PX dari atas tampilkan tombol
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = 'block';
   } else {
      mybutton.style.display = 'none';
   }
}

// saat user klik tombol, scroll akan ke atas
function topFunction() {
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;
}

$(document).ready(function () {
   $(".box").slick({
       arrows: false,
       infinite: true,
       slidesToShow: 3,
       slidesToScroll: 2,
   });
});

