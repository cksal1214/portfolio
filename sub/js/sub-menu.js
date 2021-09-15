/*sub-menu.js*/

$(document).ready(function () {


    $(".long-menu ul li").on("click", function (event) {
        event.preventDefault();
        
          
       
        

    });


    $('.long-menu ul li:first-child').click(function () {
        // console.log('tg');
        $('.tabmenu>li:nth-child(2)').addClass('active').siblings().removeClass('active');
    });
    $('.long-menu ul li:nth-child(2)').click(function () {

        $('.tabmenu>li:nth-child(3)').addClass('active').siblings().removeClass('active');
    });
    $('.long-menu ul li:nth-child(3)').click(function () {
        // console.log('tg');
        $('.tabmenu>li:nth-child(4)').addClass('active').siblings().removeClass('active');
    });
    $('.long-menu ul li:nth-child(4)').click(function () {
        // console.log('tg');
        $('.tabmenu>li:nth-child(5)').addClass('active').siblings().removeClass('active');
    });
    $('.long-menu ul li:nth-child(5)').click(function () {
        // console.log('tg');
        $('.tabmenu>li:nth-child(1)').addClass('active').siblings().removeClass('active');
    });
    $('.long-menu ul li:nth-child(6)').click(function () {
        // console.log('tg');
        $('.tabmenu>li:nth-child(6)').addClass('active').siblings().removeClass('active');
    });
    $('.long-menu ul li:nth-child(7)').click(function () {
        // console.log('tg');
        $('.tabmenu>li:nth-child(7)').addClass('active').siblings().removeClass('active');
    });
    $('.long-menu ul li:nth-child(8)').click(function () {
        // console.log('tg');
        $('.tabmenu>li:nth-child(8)').addClass('active').siblings().removeClass('active');
    });


}); //document
