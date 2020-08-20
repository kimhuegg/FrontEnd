var nav =document.querySelector('#navBar ul');
var openNav =document.querySelector('.navBar-menu');
openNav.addEventListener('click',function(){
    nav.classList.toggle('open-navBar');
})
