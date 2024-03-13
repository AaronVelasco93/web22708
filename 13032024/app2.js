const carrito=[];
const fruta=prompt("¿Que fruta desea comparar?");
carrito.push(fruta);

while(confirm('¿Desea agregar otro articulo?')){
    const fruta = prompt("¿Que fruta desea comprar?");
    carrito.push(fruta);
}
console.log("Usted compro: ");
carrito.forEach((fruta,index)=>{
    console.log(`${index+1} : ${fruta} en carrito`)
});