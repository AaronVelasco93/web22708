const carrito=[];
const fruta=prompt("¿Que fruta desea comparar?");

carrito.push(fruta);
while(confirm('¿Desea agregar otro articulo?')){
    const fruta = prompt("¿Que fruta desea comprar?");
    carrito.push(fruta);
    console.log(fruta);
}

console.log(fruta);