let promocion = alert('Envios gratis por compras superiores a $ 100.000')



// creo  una clase  productos donde  donde abarco la tienda de productos
class Producto{
    constructor(nombre, precio, id){
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.id = id;
    }
    descuento(){
        this.precio = this.precio* 0.8;
    }
}

const productos = []
productos.push(new Producto(' te verde', '24500', 1));
productos.push(new Producto('te forma', '14800', 2));
productos.push(new Producto('te relaxnat', ' 14800', 3));
productos.push(new Producto('biotin', '61000', 4));
productos.push(new Producto('clorofila', '20850', 5));
productos.push(new Producto('esencia ansioff', ' 15250', 6));
productos.push(new Producto(' te meishen', '29000', 7));
productos.push(new Producto('levadura', '40000', 8));

for(const producto of productos ){
    producto.descuento()
}
// console.log(productos)

// let pasar = parseInt(prompt('ingrese el id de tu producto y si no desea alguno de nuestros producto ingresar no compara'));

// function mostrar(senal){
//     alert(senal)
// }

// while(pasar != 'no comprar'){
// if(pasar === 1){
//     productos.find((el) => {
//         if(el.id === 1){
//             mostrar( el.nombre + ' ' + el.precio);
//         }
//     })
// } else if(pasar === 2){
//     productos.find((el) => {
//         if(el.id === 2){
//             mostrar( el.nombre + ' ' + el.precio);
//         }
//     })
// } else if(pasar === 3){
//     productos.find((el) => {
//         if(el.id === 3){
//             mostrar( el.nombre + ' ' + el.precio);
//         }
//     })
// } else if(pasar === 4){
//     productos.find((el) => {
//         if(el.id === 4){
//             mostrar( el.nombre + ' ' + el.precio);
//         }
//     })
// } else if(pasar === 5){
//     productos.find((el) => {
//         if(el.id === 5){
//             mostrar( el.nombre + ' ' + el.precio);
//         }
//     })
// } else if(pasar === 6){
//     productos.find((el) => {
//         if(el.id === 6){
//             mostrar( el.nombre + ' ' + el.precio);
//         }
//     })
// } else if(pasar === 7){
//     productos.find((el) => {
//         if(el.id === 7){
//             mostrar( el.nombre + ' ' + el.precio);
//         }
//     })
// } else if(pasar === 8){
//     productos.find((el) => {
//         if(el.id === 8){
//             mostrar( el.nombre + ' ' +  el.precio);
//         }
//     })
// }else if(pasar != 1 ||2 ||3 ||4 ||5 ||6 ||7 ||8  ){
//     mostrar('Los sentimos por no cumplir con tu deseo de compra')
// }
// pasar = parseInt(prompt('ingrese el id de tu producto y si no desea alguno de nuestros producto ingresar no compara'));
// }

let entrada = parseInt(prompt('ingresa producto a comprar'));

let carrito = [];

const productoEncontrado = productos.find(el => el.id === entrada);
while(entrada != 'no agregar'){

    if(productoEncontrado){
        carrito.push(productoEncontrado);
    }else{
        console.log('producto no encontrado');
    }
    entrada = parseInt(prompt('ingrese producto a comprar'))
}
alert('tu compra realiza fue por un valor' + '')
//
// 