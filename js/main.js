let IngresarIngredientes = prompt('Ingrese el ingrediente:')

while (IngresarIngredientes != ''){
    console.log(`El ingrediente ${IngresarIngredientes} ha sido agregados`);
    IngresarIngredientes = prompt('Ingresar nuevo ingrediente o bien deje este espacio vacio')
}

if (IngresarIngredientes == '') {
    console.log('Todos los ingredientes han sido agregados')
}