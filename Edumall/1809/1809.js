document.addEventListener('DOMContentLoaded',function(){
    var nut1= document.getElementById('nutso1');
    var to= document.querySelector('.to');
    nut1.onclick= function(){
        console.log("click vao nut");
        to.classList.toggle('quayX');
    }

},false)