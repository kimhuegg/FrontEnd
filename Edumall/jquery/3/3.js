$(function(){
    $('.menutren ul li a').click(function(e){
         console.log("hello");
        e.preventDefault();
        $('html,body').animate({scrollTop: 1300});
    });
    var offset1 = $('.chapter1').offset().top;
    console.log(offset1);
    var offset2 = $('.chapter2').offset().top;
    console.log(offset2);
    var offset3 = $('.chapter3').offset().top;
    console.log(offset3);
})
