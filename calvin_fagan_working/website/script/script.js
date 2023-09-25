function openNav() {
  document.getElementById("sidemenu").style.width = "250px";
}

function closeNav() {
  document.getElementById("sidemenu").style.width = "0";
}

  /*Slide Show*/
  let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}


function validateForm() {
  let w = document.forms["myForm"]["name"].value;
  let x = document.forms["myForm"]["number"].value;
  let y = document.forms["myForm"]["parish"].value;
  let z = document.forms["myForm"]["subject"].value;
  if (w == "") {
    alert("Name must be filled out");
    return false;
  }
  else if (x == ""){
    alert("You Forgot your number");
    return false;
  }
  else if (y == "") {
    alert("remeber to select you location");
    return false;
  }else if (z == "") {
    alert("I don't know how to help you");
    return false;
  }else{
    alert("Information submitted successfully");
  }

}