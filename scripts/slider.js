let slideIndex = 0;
showSlides("mySlides");
showSlides("adviceSlide");

function showSlides(className) {
  let i;
  let slides = document.getElementsByClassName(className);
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(() => showSlides(className), 3000);
}