$(document).ready(function() {


// Add jQuery here



$('.morelink').click(function(event) {
  $('.more').toggle();
});



$('.text').each(function(index, el) {
  if ($(this).prop('scrollWidth') > $(this).parent().width() ) {
    $(this).addClass('overflowing');
  }
  else {
   $(this).addClass('noverflow');
  }
});

















  });
