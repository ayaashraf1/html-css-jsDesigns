const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const result = document.getElementById('result');
const history = document.getElementById('history');


numbers.forEach(number => {
    number.addEventListener('click',(e)=>{
        let finalNum = '';
        const currentNum = parseInt(e.target.innerText);
        if(result.innerText != ""){
           finalNum = result.innerText.replace(/,/g, '')+currentNum; 
        }else {
            finalNum = result.innerText+currentNum;
        }

        result.innerText = finalNum.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    });
});
operators.forEach(operator => {
    operator.addEventListener('click',(e)=>{
        const currentOperator = e.target.innerText;
        checkOperator(currentOperator);
    })
});

function addToEquation(ele){
    history.innerText+=ele;
}

function checkOperator(operator){
    switch (operator) {
        case 'C':
            clearEle(result);
            clearEle(history);
            break;
        case 'CE':
           result.innerText = result.innerText.slice(0,result.innerText.length-1);
          break;
        case 'x':
            operator = '*';
        case '%':
        case '-':
        case  '+':
            addToEquation(result.innerText.replace(/,/g, ''));
            addToEquation(operator);
            clearEle(result);
            break;
        case '=':
            calculateEquation();
            clearEle(history);
            break;
        default:
            addToEquation(result.innerText.replace(/,/g, ''));
            addToEquation('/');
            clearEle(result);
            break;
      }
}
function clearEle(ele){
    ele.innerText = '';
}
function calculateEquation(){
     const equation = history.innerText + result.innerText;
     result.innerText = eval(equation);
}