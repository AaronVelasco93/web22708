//declaramos una funcion
/* 
function numeroAleatorio(min, max){
        return Math.floor(Math.random()*(max-min))+min ;
}
console.log(numeroAleatorio(1, 10)); */


const miNumero= function(min,max){
    return Math.floor(Math.random()*(max-min))+min ;
}

console.log(miNumero(1,10));