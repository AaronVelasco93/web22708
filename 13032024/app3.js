var miCarro = new Object();
miCarro.marca='Ford';
miCarro.año=2013;
miCarro.modelo='Ikon Fiesta';

var miCarro={
    marca:'Ford',
    modelo:'Ikon Fiesta',
    año:2013
};

const gato={
    nombre:'Alfred',
    duerme:true,
    edad:5,
    enemigos:["agua","perro"]
}
/* 
//CRUD con objetos
//crear
gato.color='Atrigrado';
console.log(gato.color);
//leer
console.log(gato);

//Actualizar
gato.edad=6;
console.log(gato)
//Eliminar
delete gato.duerme;
console.log(gato)
 */
/* 
console.log(gato.nombre);
console.log(gato.edad);
console.log(gato.enemigos[1]);
 */

console.log(gato.hasOwnProperty("nombre"));
console.log(gato.hasOwnProperty("salud"));

