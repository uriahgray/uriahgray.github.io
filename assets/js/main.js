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


(function($) {

$.fn.randomize = function(childElem) {
  return this.each(function() {
      var $this = $(this);
      var elems = $this.children(childElem);

      elems.sort(function() { return (Math.round(Math.random())-0.5); });

      $this.remove(childElem);

      for(var i=0; i < elems.length; i++)
        $this.append(elems[i]);

  });
}
})(jQuery);

$(".col1 a").css('opacity', '0');


setTimeout(function(){
  $(".col1 a").css('opacity', '1');
  $(".col1").randomize("a");

}, 500);














  });
