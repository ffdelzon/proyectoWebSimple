$(document).ready(function(){
// Add smooth scrolling to all links inside a navbar
$(".navbar a").on('click', function(event){

  // Prevent default anchor click behavior
  event.preventDefault();

  // Store hash (#)
  var pageRef = $(this).attr("href");

  if(pageRef[0] != '#') {
    window.location.href = pageRef;

  } else {

    var pageRefPosition = $(pageRef).offset().top ;
    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area (the speed of the animation)
    $("html,body").animate({
      scrollTop:pageRefPosition
    }, 800, function(){

      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.pageRef = pageRef;
    });

  }

});

});