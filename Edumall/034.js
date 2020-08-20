document.addEventListener("DOMContentLoaded",function(){
    var nut = document.getElementById('nuthieuung');
    var trangthai = "lan1";
    var khoi = document.getElementById('kcd');
    nut.onclick = function(){
        console.log("bạn vừa click");
        if(trangthai == "lan1"){
            console.log("click lần 1");
            trangthai = "lan2";
            khoi.classList.remove("khongchuyendonggihet");
            khoi.classList.add("chieuso1");
            
        }else{
            console.log("click lần 2");
            trangthai= "lan1";
            khoi.classList.remove("chieuso1");
        }
    }
},false)