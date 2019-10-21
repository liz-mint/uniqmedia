//smoth scroll and page-up
$(document).ready(function(){
  $(window).scroll(function() {
      if ($(this).scrollTop() > 1600) {
        $('.page-up').fadeIn();
      } else {
        $('.page-up').fadeOut();
      }
    });
    $("a[href^='#']").click(function(){
      var _href = $(this).attr("href");
      $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
      return false;
  });
}