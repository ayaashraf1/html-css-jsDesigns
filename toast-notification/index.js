const btn = document.getElementById('toastBtn');
const toastContainer  =  document.getElementById('toastContainer');
btn.addEventListener('click',function(){
 const divEle = document.createElement('div');
 divEle.className = 'toast';
 divEle.innerHTML = 'notification created successfully';
 toastContainer.append(divEle);
 setTimeout(()=>{
  divEle.remove();
 },2000);
});