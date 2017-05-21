$(document).ready(function() {


// Add jQuery here




$('.nav').click(function() {
  $('.menu').toggleClass('showme');
  $('.main').toggleClass('moveleft');
});








$(document).on('click', 'a', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
});
















  });
