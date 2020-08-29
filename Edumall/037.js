document.addEventListener("DOMContentLoaded",function(){
    var tg = document.getElementsByClassName('tamgiac');
    var tamgiac = tg[0];
    var danhsach = document.getElementsByClassName('danhsach');
    danhsach= danhsach[0];
    //su dung onclick va toggle cho tam giac
    tamgiac.onclick = function(){
        console.log("click");
        this.classList.toggle('tamgiactrang');
        danhsach.classList.toggle('ra');
    }
},false)
