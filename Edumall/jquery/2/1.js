$(function() {
    console.log($('.ndmotkhoi'));
    $('.ndmotkhoi').slideUp();
    $('.motkhoi h3').click(function (e) { 
        $(this).next().slideToggle();
    });
});