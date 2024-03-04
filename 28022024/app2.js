//IF
/*
if (condicion){
    Bloque de verdadero
}else {
    bloque falso
}
*/
/*
let textJavascript=prompt("Escriba 'javascript'");

if (textJavascript === "javascript"){
    console.log("Lo escribiste super bien");
 
}else{

    console.log("Lo escribiste mal");
}
*/
/*
let numeroUsuario= prompt("Ingresa un numero entre el 1 y 10");

console.log(numeroUsuario+ " Es: "+ typeof numeroUsuario);

if( parseInt(numeroUsuario) <=10 && parseInt(numeroUsuario)>1 ){
    //sentencia true
    console.log("Bien");

}else{
    // setencia false
    console.log("Mal");
}

*/


/*
let opcionUser=prompt(`
Elija una opcion:
1: Libros
2: Peliculas
3: Juegos
`);

switch(opcionUser){
    case "1":
        console.log("Principito");
        break;
    case "2":
        console.log("Matrix");
        break;
    case "3":
        console.log("Mario Bros");
        break;
    default:
        console.log("Opcion invalida");
        break;
}
*/

//While
/*
let numero = 0;
while( numero <= 10){
    console.log(numero);
    numero++;
}
*/

/*
function getRandomInt(min, mx){
    return Math.floor(Math.random() * (max-min))+min;
}
*/


let numeroMaquina = Math.floor(Math.random()*(10 - 1))+1;
console.log(numeroMaquina);

let numeroUsuario = parseInt( prompt("Adivina el numero del 1 al 10") );

let vidas= 3;

while( numeroMaquina !== numeroUsuario && vidas >1 ){
    vidas--;
    numeroUsuario=parseInt(prompt("Vuleve a intentarlo, tus vidas son: "+vidas));
}


if(numeroMaquina== numeroUsuario){
    console.log("Ganaste");
}else{
    console.log("PERDISTE :(, el numero era: "+numeroMaquina);

}