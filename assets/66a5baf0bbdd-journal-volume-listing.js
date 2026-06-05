$(document).ready(function () {
  var $imageContainer = $('.graphical-abstract-listing').children();

  $imageContainer.each(function(){
    var $img = $(this).find('img');
    $(this).html($img);
  });
});
