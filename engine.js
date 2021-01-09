var screen = document.querySelector('.myscreen');
var button = document.querySelector('.firstrow');
var buffer = "0";
var result = 0;
var container = 0;
var addop = 0;
var subop = 0;
var multop = 0;
var divop = 0;
var previousvalue = 0;
let buffer2 = "0";
function putvalueinscreen(){
    screen.innerText = buffer2;
}
function operation(){
    if (addop==1){
    result = previousvalue+container; 
    }
    if (subop==1){
        result = previousvalue-container;
    }
    if (multop==1){
        result = previousvalue*container;

    }
    if (divop==1){
        result = previousvalue/container;

    }
}
function checktext(){
 
    if (isNaN(parseInt(buffer))){
       
        handlesymbol(buffer);
    }
    else{
        handlenumber(buffer);
    }
    operation();
}
function handlemathop(symbol){
    if (symbol === '+'){
        if (addop==1){
           //do nothing for now
        }
        else{
        addop = 1;
        return;
        }
    }
    else if (symbol === '-'){
        if (subop==1){
          //do nothing for now 
        }
        else{
        subop = 1;
        return;
        }
    }
    else if (symbol === '×'){
        if (multop==1){
           //do nothing for now
        }
        else{
            multop = 1;
        return;
        }
    }
    else if (symbol === '÷'){
        if (divop==1){
           //do nothing for now
        }
        else{
            divop = 1;
        return;
        }
    }
}
function handlesymbol(symbol2){
    buffer2 = '';
    buffer2 = symbol2;
     
    switch(symbol2){
        case '+':
        case '-':
        case '×':
        case '÷':
            handlemathop(symbol2);
            break;
        case 'C':
            buffer = 0;
            container =0;
            previousvalue = 0;
            buffer2 =" ";
            addop=0;
            subop =0;
            divop = 0;
            multop =0;
            break;
        case '=':
            buffer2 =result;
            container = result;
            addop=0;
            subop =0;
            divop = 0;
            multop =0;
            break;
        case '←':
            container = container.toString();
            container = container.substring(0, container.length - 1);
           buffer2 = container;

  default:
    
    }    
    return;
}

function handlenumber(number){  
    if(isNaN(buffer2)){
        previousvalue = container;
        buffer2 = ' ';
    }
    if (buffer2 === "0") {
        buffer2 = number;
      } else {
        buffer2 += number;
      }
    
    container = parseInt(buffer2) ;
}

document.querySelector('.mycalculator').addEventListener('click', function(event) {
   buffer = event.target.innerText;
   checktext();
   putvalueinscreen();
  });


