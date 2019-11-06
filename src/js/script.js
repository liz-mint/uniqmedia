$(document).ready(function(){
    //smoth scroll and page-up
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1600) {
          $('.page-up').fadeIn();
        } else {
          $('.page-up').fadeOut();
        }
      });

    $("a[href^='#']").click(function(e){
        var _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top}, 777);
        e.preventDefault();
        return false;
    });

    //counter increment
    let show = true;
    const countbox = ".statistics__block";
    $(window).on("scroll load resize", function () {
        if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
        let w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
        let e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
        let w_height = $(window).height(); // Высота окна браузера
        let d_height = $(document).height(); // Высота всего документа
        let e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
        if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            // $('.counter-block__number').css('opacity', '1');
            $('.statistics__square').spincrement({
                thousandSeparator: ",",
                duration: 1200
            });
             
            show = false;
        }
    });

    $('.case__block').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInDown',
        offset: 100
    });

    $('.statistics__text').addClass("hidden").viewportChecker({
        classToAdd: 'visible statistics__text_active',
        offset: 100
    });
})

