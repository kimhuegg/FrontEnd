$(document).ready(function () {
    TweenMax.staggerFrom($('.tinto'),.5,{
        top: 100,
        opacity: 0
    },.2)
    $('.noidungthem').slideUp();
    $('.nutload').click(function (e) { 
        e.preventDefault();
        $('.noidungthem').slideDown();
        TweenMax.staggerFrom($('.noidungthem .tinto'),.5,{
            top: 100,
            opacity:0
        },0.1)
    });
});