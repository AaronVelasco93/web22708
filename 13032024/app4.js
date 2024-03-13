//objeto Gato
const gato = {
    nombre: "Chiquitilin",
    duerme: true,
    edad: 4,
    enemigos:["perro","agua","vida"],
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
console.log(gato.otros.amigos[0]);
console.log(gato.otros.favoritos.comida.caliente);

//Propiedades
const frutas=["pera","platano","manzana"];
console.log(frutas.length);
//Metodos
frutas.push("Banana");
console.log(frutas);











