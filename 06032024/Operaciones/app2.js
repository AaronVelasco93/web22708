document.getElementById('calculator-form').addEventListener('submit',function (event) {
event.preventDefault();    
let num1=parseFloat(document.getElementById('num1').value);
let num2=parseFloat(document.getElementById('num2').value);

let operador=document.getElementById('operador').value;
let resultado;


switch (operador){
    case 'sum':
        resultado= num1+num2;
    break;
    case 'subtract':
        resultado= num1-num2;
    break;
    case 'multiply':
        resultado= num1*num2;
    break;
    case 'divide':
        if(num2!==0){
            resultado= num1/num2;
        }else{
            resultado="Error!  No se puede dividir entre cero.";
        }
    break;
    default:
        resultado="Operador invalido";
    break;
}
    document.getElementById('result').innerHTML=`El resultado es: ${resultado}`;

} );