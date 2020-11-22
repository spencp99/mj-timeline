window.onload=function(){
  

var window = document.getElementById("sourcewindow");
var button = document.getElementById("source-button");
var close = document.getElementsByClassName("close")[0];

function toggleSource() {
  window.classList.toggle("active");
}
button.addEventListener("click", toggleSource)

function toggleclose() {
  window.classList.toggle("active");  
}
close.addEventListener("click", toggleclose)
}

var slideCount = 1;
activeSlide(slideCount);

function plusSlides(n) {
  activeSlide(slideCount += n);
}

function currentSlide(n) {
  activeSlide(slideCount = n);
}

function activeSlide(n) {
  var i;
  var slides = document.getElementsByClassName("date");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideCount = 1}
  if (n < 1) {slideCount = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideCount-1].style.display = "block";
  dots[slideCount-1].className += " active";
} 




