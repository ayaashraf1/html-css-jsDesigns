const changeBtn = document.getElementById('changeBtn');

changeBtn.addEventListener('click',(e)=>{
    e.currentTarget.classList.toggle('active');
    document.body.style.background = '#'+randomBackground();
});
function randomBackground(){
return Math.floor(Math.random()*16777215).toString(16);
}