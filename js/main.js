// let IngresarIngredientes = prompt('Ingrese el ingrediente:')

// while (IngresarIngredientes != ''){
//     console.log(`El ingrediente ${IngresarIngredientes} ha sido agregados`);
//     IngresarIngredientes = prompt('Ingresar nuevo ingrediente o bien deje este espacio vacio')
// }

// if (IngresarIngredientes == '') {
//     console.log('Todos los ingredientes han sido agregados')
// }
let dinero = 4000;
function verDinero() {
    console.log(`Usted posee ${dinero}`)
};
function retirarDinero() {
    dinero = dinero - parseInt(prompt("Ingrese la cantidad a retirar"));
    verDinero();
};
function depositarDinero() {
    dinero = dinero + parseInt(prompt("Ingrese la cantidad a depositar"));
    verDinero();
}

let seleccion = prompt("Que operacion desea realizar? 1. Ver dinero 2. Retirar dinero 3. Depositar dinero 4. Salir")

if (seleccion == 1){
    verDinero();
} else if (seleccion == 2){
    retirarDinero();
} else if (seleccion == 3){
    depositarDinero();
} else if (seleccion == 4){
    console.log("Gracias por utilizar nuestros servicios!")
} else {
     console.log("Seleccion Incorrecta");
}
while(seleccion > 4){
seleccion = prompt("1. Ver dinero 2. Retirar dinero 3. Depositar dinero 4. Salir")}