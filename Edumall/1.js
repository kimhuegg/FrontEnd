document.addEventListener("DOMContentLoaded", function(){
    var nut = document.getElementById('nut1');
    var khoi = document.getElementsByClassName('card');
    console.log(nut);
    //goi sự kiên click
    nut.onclick= function(){
        console.log("click đc chưa");
        khoi[0].classList.toggle('diphai');
    }
}, false);
