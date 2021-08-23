const slide1  = document.getElementById('slide1');
const slide2 = document.getElementById('slide2');


window.addEventListener('scroll',function(){
    slide1.style.left = -window.pageYOffset+'px';
    slide2.style.left = window.pageYOffset+'px';
});