document.getElementById('burgerMenu').addEventListener('click',function(e){
    e.currentTarget.classList.toggle('active');
    const menuEle = document.getElementById('sideMenu');
    menuEle.classList.toggle('active')
});