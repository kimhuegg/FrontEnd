
$(document).ready(function () {
    $('.tdkhoi').click(function(e){
        $(this).toggleClass('xanh');
        $(this).next().slideToggle();
    })
    $('.vaicaianh a').fancybox();
    $('.ndkhoi').slideUp();
});