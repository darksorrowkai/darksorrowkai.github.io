$(document).ready(function(){
    $('.carusel__inner').slick({
            speed: 1300,
            adaptiveHeight: true,
            prevArrow: '<button type="button" class="slick-prev"><img src="../img/left.svg"></button>',
            nextArrow: '<button type="button" class="slick-next"><img src="../img/right.svg"></button>',
            responsive: [
                {
                    breakpoint: 992,
                    settings: { 
                        arrows: false,
                        dots: true
                    }
                }
            ]
    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });

    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        });
    };  
    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');


    //Modal windows

    $('[data-modal="consultation"]').on('click', function() {
        $('.overlay, #consultation').fadeIn();
    });
    $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #order, #thanks').fadeOut('slow');
    });
    

    $('.button_mini').each(function(i) {
        $(this).on('click', function() {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text())
            $('.overlay, #order').fadeIn();
        })
    });

   
    
    function valideForms(form){
        $(form).validate({
            rules: {
                name: "required",
                phone: "required",
                email: {
                    required: true,
                    email:true
                }
            },
            messages: {
                name: "Пожалуйста, введите свое имя",
                phone: "Пожалуйста, введите свой номер телефона",
                email: {
                  required: "Пожалйста, введите свою почту",
                  email: "Неправильно введен адресс почты"
                }
              }
        });
    };
    valideForms('#consultation-form');
    valideForms('#order form');
    valideForms('#consultation form');

    //Плавный скрол вверх

    $(window).scroll(function(){
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

    $("a[href^='#']").click(function(){
        var _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;    
    });

  });