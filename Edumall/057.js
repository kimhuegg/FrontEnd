document.addEventListener('DOMContentLoaded',function(){
    console.log('load xong');
    var trangthai = false;
    var doituongmenu = document.querySelector('.menu');
    window.addEventListener('scroll',function(){
        console.log('cuoonj chuootj');
        console.log(window.pageYOffset);
        if(window.pageYOffset>200){
            if(trangthai==false){
                trangthai=true;
                console.log('ok rooif');
            }
            doituongmenu.classList.add('nholai');
        }else{
            if(trangthai==true){
                trangthai=false;
            }
            doituongmenu.classList.remove('nholai');
        }
    })
},false)