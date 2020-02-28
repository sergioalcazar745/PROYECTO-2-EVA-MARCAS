var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slideShow");
  var dots = document.getElementsByClassName("dot");
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
}

function showAutoSlides(){
    var cons= 1;
    var element = document.getElementsByClassName('.menu').getElementsByTagName('.slideShow');
    for(var n=cons; n <= elemento.length; n++){		
        elemento[n].className = 'selected';
        for(var i = 0; i<elemento.length; i++){
         if(i!=cons){
          elemento[i].className = 'noselected';
         }		
        }
         cons++;							
         break;
        }	
        if(cons >= elemento.length){
         cons = 0;		
        }
        return false;
       }


       window.onload = function(){
        setInterval(slide_show, 5000);
       


}