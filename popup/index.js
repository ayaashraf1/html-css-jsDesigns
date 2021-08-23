const btn = document.getElementById('popupBtn');
const popUp  =document.getElementById('popupContainer');
const closeBtn  =document.getElementById('closeBtn');

btn.addEventListener('click',()=>{
  popUp.classList.toggle('active');
});

closeBtn.addEventListener('click',()=>{
    popUp.classList.toggle('active');
})