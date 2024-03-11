const frutas= ["banana","pera","manzanas"];
// push - pop -shift unshift

// push -> Insertar un elemento al final de arreglo
/* 
 frutas.push("Jitomate");
 console.log(frutas);
*/
//unshift -> Inserta un elemento al principio en el Array
/* 
 frutas.unshift("Manzana");
 console.log(frutas);
*/
//POP -> Elimina el ultimo elemento del Array
/* 
    frutas.unshift("uvas");
    console.log(frutas);
    const frutaEliminada= frutas.pop();
    console.log(frutas);
    console.log(frutaEliminada);
*/

frutas.unshift("uva");
const frutaEliminada=frutas.shift();
console.log(frutas);
console.log(frutaEliminada);