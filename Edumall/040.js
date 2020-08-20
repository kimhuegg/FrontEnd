document.addEventListener("DOMContentLoaded",function(){
    var nut=document.getElementsByClassName('nuttongquat');
    for (var i =0;i<nut.length;i++) {
        nut[i].onclick= function(){
            console.log(this.getAttribute('data-matkhau'));
        }
    }

    nut.onclick= function () {
        var mk=nut.getAttribute('data-matkhau');
        console.log(mk);
    }

},false)