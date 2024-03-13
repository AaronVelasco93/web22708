const gato = {
    nombre: "Chiquitilin",
    duerme: true,
    edad: 4,
    enemigos:["perro","agua","vida"],
    //Metodo
    comer:function(){
        console.log("Ahora está comiendo");
    },
    //Metodo con reduccion
    escalar(){
        console.log("Escalando un arbol");
    },
    //Metodo con parametros
    cazar(presa){
        return "Ahora va a buscar una presa: "+presa+" y la atacara";
    }
    ,
    otros:{
        amigos:["Perro Amigo","Otro Gato"],
        favoritos: {
            comida:{
                fria:'Atun',
                caliente:'Leche'
            }
        }

    }
}
gato.comer();
gato.escalar();
console.log(gato.cazar("raton"));