const gato = {
    nombre: "Valiente",
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"],
    comer(comida) {
        return `${this.nombre} está comiendo ${comida}`;
    },
    get nombreMayuscula() {
        return this.nombre.toUpperCase();
    },
    set nuevoEnemigo(nuevo) {
        this.enemigos.push(nuevo);
    },
};

// GET
console.log(gato.nombreMayuscula);

// SET
gato.nuevoEnemigo = "batman";
console.log(gato.enemigos);