document.addEventListener("DOMContentLoaded",function(){
    var nut = document.querySelector('.nut');
    var menutrai = document.querySelector('.menutrai');
    var den= document.querySelector('.den');
    var noidungto = document.querySelector('.noidungto');
    var trang = document.querySelector('.mautrang');
    //xu ly
    //khi click vao nut xanh4
    nut.onclick = function(){
        den.classList.add('len');
       // noidungto.classList.add('dichphai');
        trang.classList.add('trangquay');
        menutrai.classList.remove('vetrai');
    }
    den.onclick = function(){
        den.classList.remove('len');
        //noidungto.classList.remove('dichphai');
        trang.classList.remove('trangquay');
        menutrai.classList.add('vetrai');
    }
},false)