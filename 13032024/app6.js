const gato = {
    nombre: "Chiquitilin",
    duerme: true,
    edad: 4,
    enemigos:["perro","agua","vida"],
    //Metodo
    comer(comida){
       
       return `${this.nombre} esta comiendo un: ${comida}`; 
    }
       
}


console.log(gato.comer("pez"));