$(document).ready(function() {
    $(".menuToggle").click(function() {
      $(this).toggleClass("active");
      $('.menu__ul').slideToggle(300, function(){
        if($(this).css('display') === "none"){
          $(this).removeAttr('style');
        }
      });
    });
  });

  $(function(){

    $('.carousel__inner').slick({
        arrows: false,
        dots: true,
        slidesToShow: 1,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    dots: false
                }
             },
        ]
    });

});