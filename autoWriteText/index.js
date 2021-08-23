const textEle = document.getElementById('textEle');
const text = 'javascript is the best!!!';

let index = 0;

function autoWrite(){
      textEle.innerText=text.slice(0,index);  
      index++;
      if(index > text.length){
          index = 0;
      }
}

setInterval(() => {
    autoWrite();
},200);