var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000);
}


window.onscroll = function() {myFunction()};

var myTopnav = document.getElementById("myTopnav");
var sticky = myTopnav.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    myTopnav.classList.add("sticky")
  } else {
    myTopnav.classList.remove("sticky");
  }
}


$(window).on('beforeunload', function(){
      $(window).scrollTop(0);
});

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
