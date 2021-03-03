$(document).ready(function(){
  var width = $('.top-navbar').css('margin-right');

  $('.letruc')
    .css('width', width)
    .css('transform', 'translateX(-'+(parseInt(width)+5)+'px)')
})
