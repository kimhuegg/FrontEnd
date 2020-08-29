$(document).ready(function () {
    $('.nut').click(function (e) { 
        e.preventDefault();
        $('.noidung').addClass('noidunghienra');
        $('.momo').addClass('noidunghienra');
    });
    $('.nutdong, .momo').click(function (e) { 
        e.preventDefault();
        $('.noidung').removeClass('noidunghienra');
        $('.momo').removeClass('noidunghienra');
        
    });
});