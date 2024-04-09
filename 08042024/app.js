/*
//Este si es funcional
    const gato = {
    nombre: "Chiquitilin",
    duerme: true,
    edad: 4,
    enemigos:["perro","agua","vida"],
    //Metodo
    comer(comida){
       
       return `${this.nombre} esta comiendo un: ${comida}`; 
    }
     
} */

/* 
    //Esto no funciona, dado que no se alcanza a el atrubuto de Nombre
    const gato = {
    nombre: "Chiquitilin",
    duerme: true,
    edad: 4,
    enemigos:["perro","agua","vida"],
    //Metodo
    comer: (comida)=>{
       
       return `${this.nombre} esta comiendo un: ${comida}`; 
    }
} */

const gato = {
    nombre: "Chiquitilin",
    duerme: true,
    edad: 4,
    enemigos:["perro","agua","vidas","Rata"],
    otro:{
        amigos:["Manchas","pelusa","kikis"],
        comida:{
            fria:"Atun",
            caliente:"leche",
        },

    },
    //Metodo
    comer(comida){
       
       return `${this.nombre} esta comiendo un: ${comida}`; 
    },
    //Metodo 2, con una funcion flecha
    mostrarEnemigos(){
        return this.enemigos.forEach((item)=>console.log(item));
    }
     
};

//gato.mostrarEnemigos();
//console.log(gato.comer("pez"));
/* 
//elementos de un objeto, ayuda a depurar
for(const propiedad in gato){
    console.log(gato[propiedad]);
} 
*/
//Devuelve un array con los valores correspondientes a las propiedades enumerables
//console.log(Object.values(gato));
//Object.values(gato).forEach((intem)=>console.log(intem));

//Destruturacion de objetos
    /* const nombreGato = gato.nombre;
    console.log(nombreGato); */
   /*  const {nombre, duerme, edad, enemigos}= gato;
    console.log(nombre);
    console.log(duerme);
    console.log(edad);
    console.log(enemigos); */

let {nombre: nombreMiGato}=gato;
console.log(nombreMiGato);

// datos por defecto
const {nombre:nombreGato2 ="Sin nombre"}=gato;
console.log(nombreGato2);

//La destructuracion tambien sirve para los arreglos

let frutas=["pera","manzana", "platano","Aguacate"];
let [pera,manzana,platano,Aguacate]=frutas;
console.log(pera);
console.log(manzana);


let {
    otro:{amigos},
}=gato;

console.log(amigos);


let {comer}=gato;
console.log(comer("pez"));

