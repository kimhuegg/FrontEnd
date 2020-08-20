document.addEventListener("DOMContentLoaded",function(){
var nut = document.getElementsByClassName('declick');
var nd = document.getElementsByClassName('dehienthi');
for(var i= 0;i<nut.length;i++){
    nut[i].onclick = function(){
        for(var j=0;j<nut.length;j++){
            nut[j].classList.remove('mautrang');
        }
        this.classList.toggle('mautrang');
        var ndhienra = this.getAttribute('data-hienlen');
        var phan_tu_hien_ra = document.getElementById(ndhienra);
        for(var j=0; j<nd.length;j++){
            nd[j].classList.remove('ra');
        }
        phan_tu_hien_ra.classList.toggle('ra');

    }
}
},false)