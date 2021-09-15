//index.js_kyochon-main



$(document).ready(function () {


    ////////////햄버거 버튼 클릭시 서브메뉴 slide///////////////////////
    $('.menu-btn').click(function () {
        $('.sub').stop().slideToggle();
        $('.menu-btn').toggleClass('x-active');
    });

    /////////////메뉴hover 슬라이드 ///////////////////////////////
    $('nav ul li,.sub').mouseover(function () {
        $('.sub').stop().slideDown();

    });

    $('nav ul li,.sub').mouseleave(function () {
        $('.sub').stop().slideUp();

    });







    /////////poroducts 버튼 클릭시 메뉴 변경하기//////////////////
    var $index = 0;
    var $firstSlide = $('.item-wrap').eq($index).stop(true).animate({
        'opacity': 1
    }, 100);


    ///오른쪽 버튼  함수///
    function click_right() {
        if ($index == 2) {
            return;
        }
        $index = $index + 1;
        var $firstSlide = $('.item-wrap').eq($index - 1).stop(true).animate({
            'opacity': 0
        }, 100);
        var $secondSlide = $('.item-wrap').eq($index).stop(true).animate({
            'opacity': 1
        }, 100);
        console.log($index);
    };

    ///왼쪽 버튼 함수///
    function click_left() {
        if ($index == 0) {
            return;
        }
        $index = $index - 1;
        var $firstSlide = $('.item-wrap').eq($index + 1).stop(true).animate({
            'opacity': 0
        }, 200);
        var $secondSlide = $('.item-wrap').eq($index).stop(true).animate({
            'opacity': 1
        }, 200);
        console.log($index);
    };



    $('.rBtn').click(function () {
        click_right();
    });
    $('.lBtn').click(function () {
        click_left();
    });




    ///////////service 마우스 hover시 이미지 나타나게 하기////////////////////////

    //leftbox//
    $('.leftbox').mouseenter(function () {
        $('.leftbox .map').stop().fadeIn(1000);
    });
    $('.leftbox').mouseleave(function () {
        $('.leftbox .map').stop().fadeOut(1000);
    });

    //rightbox//


    $('.rightbox').mouseenter(function () {
        $('.rightbox .delivery').show().animate({
            left: 360
        }, 700).fadeOut(300);

        $('.rightbox').mouseleave(function () {
            $('.rightbox .delivery').css('left', 80);
        });



    });

    ////////////////메인슬라이드함수////////////////////////////////
    var sideSlidePage = 0;
    var sideSlide = function () {
        $('.main-slide-grp').animate({
            left: '-100%'
        }, 600, function () {
            //1) 맨 앞 요소를 맨 뒤로 이동
            //2) 변경된 요소의 순서에 따라 위치값 변경

            $(this).append($('.main-slide-grp li:first'))
                .css({
                    left: 0
                });

        }); //sideSlide
        sideSlidePage++;
        if (sideSlidePage > 2) {
            sideSlidePage = 0;
        }
        moveSelB(sideSlidePage);

    };

    var sideSlideStop = function () { // 함수정의

        //스탑버튼이 클릭되면 멈추기
        $('.stopBtn').click(function () {
            $('.stopBtn').css('display', 'none');
            $('.playBtn').show();
            clearInterval(intcall_side); // interval 삭제 --> 움직임제거
        });

    } //sideSlideControl

    var sideSlidePlay = function () { // 함수정의

        //스탑버튼이 클릭되면 멈추기
        $('.playBtn').click(function () {
            $('.playBtn').css('display', 'none');
            $('.stopBtn').show();
            autoCallSide();
        });

    } //sideSlideControl
    $('.playBtn').mouseenter(function () {
        $('.playBtn img').attr("src", "img/playbuttonH.png");
    })
    $('.playBtn').mouseleave(function () {
        $('.playBtn img').attr("src", "img/playbutton.png");
    })


    sideSlideStop();
    sideSlidePlay();

    /*슬라이드 자동실행 함수*/

    var intcall_side; //인터발 변수
    var autoCallSide = function () {
        intcall_side = setInterval(function () {
            sideSlide();
        }, 2000);
    };
    autoCallSide();



    $('.pager ul li').click(function () {
        $(this).addClass('selB').siblings().removeClass('selB');
    });

    var moveSelB = function (index) {
        $('.pager ul li#' + String(index)).addClass('selB').siblings().removeClass('selB');

    }
    ////////////product-new 이미지 fadeIn ////////////////////////

    var now = 0;

    var img = 2;

    

    function slide() {

        if (now == img) {

            $('.products-new li').eq(now).fadeOut(800);

            $('.products-new li').eq(0).fadeIn(800);

            now = 0;

        } else {

            $('.products-new li').eq(now).fadeOut(800);

            $('.products-new li').eq(now + 1).fadeIn(800);

            now++;

        }

    }



    setInterval(slide, 2500);



    //////////스크롤 내릴 때 배경이미지 나타나게하기/////////////



    var imageShow = function () {
        $(window).scroll(function () {

            //현재 스크롤 위치 값
            var scrollValue = $(document).scrollTop();
            //console.log(scrollValue);

            if (scrollValue > 1800) {
                $('.sns-bg-grp').fadeIn(2000)
            } else {
                $('.sns-bg-grp').fadeOut(500)
            };


        });
    };



    imageShow();

    ////////////sns 흐르는 이미지 ////////////////////////

    var leftImg = 0;

    var FlowPlay = function () {

        $('.insta-group').css('left', leftImg);
        leftImg = leftImg - 1;

        if (leftImg % 310 == 0) {

            $('.insta-group').append($('.insta-group li:first'))
                .css({
                    left: 0
                });
            leftImg = 0;
        }

    }; //leftImg()    
    var flowCall;
    var flowInterval = function () {
        flowCall = setInterval(function () {
            FlowPlay();
        }, 10);
    };

    flowInterval();


    ///mouseover 정지 mouseleave 재생//
    $('.insta-group').mouseover(function () {
        clearInterval(flowCall);
    });
    $('.insta-group').mouseleave(function () {
        flowInterval();
    });


}); //jQuery
