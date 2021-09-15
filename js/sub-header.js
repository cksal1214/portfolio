/*sub-header.js*/

$(document).ready(function () {
    var scrollValue = 0;

  
    //헤더 마우스호버시 변경//
    $('header').mouseenter(function () {
        if(scrollValue > 100){
            return;
        }


        $('.color-logo ').css('opacity', '1');
        $('.logo').css('opacity', '0');

    });

    $('header').mouseleave(function () {
        if(scrollValue > 100){
            return;
        }

        $('.color-logo ').css('opacity', '0');
        $('.logo').css('opacity', '1');

    });

    /***헤더 스크롤내릴때 속성 변경*****/
    $(window).scroll(function () {
        scrollValue = $(document).scrollTop();
        console.log(scrollValue);

        if (scrollValue > 100) {
            $('.logo').css('opacity', '0');
            $('.color-logo ').css('opacity', '1');

            
            $('header').css({
                background: 'rgba(320,320,320,0.8)'

            });
            $('nav ul li a').css('color', '#333');
            $('.menu-btn span').css('background-color', '#333');
            
        } else {
            $('.logo').css('opacity', '1');
            $('.color-logo ').css('opacity', '0');
            $('header').css({
                background: ''

            });
            $('nav ul li a').css('color', '');
            $('.menu-btn span').css('background-color', '');

            
           

        };
    });

    ///////menu버튼 클릭시 서브메뉴 SlideDown////////////

    $('.menu-btn').click(function () {

        $('.smenu').stop().slideDown();

    });


}); //document
