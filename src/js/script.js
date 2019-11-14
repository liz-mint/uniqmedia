$(document).ready(function () {
    //smoth scroll and page-up
    /* $(window).scroll(function () {
        if ($(this).scrollTop() > 1600) {
            $('.page-up').fadeIn();
        } else {
            $('.page-up').fadeOut();
        }
    }); */

    $("a[href^='#']").click(function (e) {
        var _href = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(_href).offset().top - $('.header').height()
        });
        e.preventDefault();
        return false;
    });

    // Set iframe attributes when the show instance method is called
    $("#videoModal").on("show.bs.modal", function (event) {
        let button = $(event.relatedTarget); // Button that triggered the modal
        let url = button.data("video"); // Extract url from data-video attribute

        $(this).find("iframe").attr({
            src: url,
            allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        });
        $(this).find("iframe").css('width', '100%');
    });
    // Remove iframe attributes when the modal has finished being hidden from the user
    $("#videoModal").on("hidden.bs.modal", function () {
        $("#videoModal iframe").removeAttr("src allow");
    });

    //case and statistic animation
    $('.case__block').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInDown',
        offset: 100
    });
    $('.statistics__text').addClass("hidden").viewportChecker({
        classToAdd: 'visible statistics__text_active',
        offset: 100
    });


    //counter increment and arrow-up-button
    let show = true;
    const countbox = ".statistics__block";
    $(window).on("scroll load resize", function () {
        if ($(this).scrollTop() > 1600) {
            $('.page-up').fadeIn();
        } else {
            $('.page-up').fadeOut();
        }

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

    if ($(window).outerWidth() < 991) {
        console.log('dfhbdf');
        $('.case .col-lg-5').addClass('order-5');
    }
})