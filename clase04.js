// Implementa una función que calcule FACTORIAL usando recursividad.


// 5 * 4 * 3 * 2 * 1 = 5!
function calcularFactorial(numero){
    if (numero == 1){
        return 1
    }
    if (numero < 0){
        console.log("El número es negativo.")
        return
    }
    else if (numero > 1){
        return  numero * calcularFactorial(numero-1)
    }
    
}

//console.log(calcularFactorial(4))





// Implementa una función que calcule potencias usando recursividad.
// El programa debe:
// - Crear una función que reciba base y exponente
// - Usar recursividad para calcular la potencia
// - Manejar casos especiales (exponente 0, negativo)

// Ejemplo de uso:

// 2 ^^ 3 = 2 * 2 * 2 = 8

function calcularPotencia(base, exponente){
    if (exponente == 0){
        return 1
    }
    if (exponente == 1){
        return base
    }
    else if (exponente > 1){
        return base * calcularPotencia(base, exponente - 1)
    }
    else if (exponente < 0){
        exponente = exponente * -1
        return 1/(base * calcularPotencia(base, exponente - 1))
    }
}

//console.log(calcularPotencia(3, -3));



// Crea un programa que encuentre los primeros N números primos.
// El programa debe:
// - Crear una función que reciba la cantidad de primos a encontrar
// - Usar un ciclo while o for para verificar números
// - Implementar una función auxiliar para verificar si un número es primo
// - Mostrar los números primos encontrados en orden

// Ejemplo de uso:
 // Encontrará los primeros 5 números primos: 2, 3, 5, 7, 11

function esPrimo(numero){
    for (let i = 2; i < numero; i++){
        if (numero % i == 0){
            return false
        }
    }
    return true
}

function encontrarPrimos(cantidad){
    let numero = 2
    let primosEncontrados = 0
    let listaPrimos = []
    while(primosEncontrados < cantidad){
        if(esPrimo(numero)){
            listaPrimos.push(numero)
            primosEncontrados++
        }
        numero++
    }
    return listaPrimos
}

//console.log(encontrarPrimos(5))

// Implementa un programa que gestione una lista de contactos.
// El programa debe:
// - Crear una función que reciba un array de contactos
// - Cada contacto debe tener: nombre, teléfono, email, edad
// - Ordenar los contactos por edad
// - Agrupar los contactos por rango de edad (18-25, 26-35, etc.)
// - Mostrar los grupos formados

// Ejemplo de uso:
const contactos = [
    { nombre: "Ana", telefono: "123-456", email: "ana@email.com", edad: 25 },
    { nombre: "Juan", telefono: "789-012", email: "juan@email.com", edad: 40 },
    { nombre: "momo", telefono: "696-969", email: "momo@email.com", edad: 20 }
];

function gestionarContactos(contactos){
    contactos.sort((a, b) => a.edad - b.edad)

    let array18_25 = []
    let array26_35 = []
    let array35plus = []

    for (let i = 0; i < contactos.length; i++){
        let edadActual = contactos[i].edad 
        if (edadActual > 18 && edadActual <= 25){
            array18_25.push(contactos[i])
        }
        else if (edadActual > 26 && edadActual <= 35){
            array26_35.push(contactos[i])
        }
        else if (edadActual > 35){
            array35plus.push(contactos[i])
        }
        else{
            console.log("contesta puñetas pipupipupipupupipupipupupipupipu")
        }
    }

    console.log("Grupo 18-25")
    for (let i = 0; i < array18_25.length; i++){
        console.log(array18_25[i])
    }

    
    console.log("Grupo 26-35")
    for (let i = 0; i < array26_35.length; i++){
        console.log(array26_35[i])
    }
    
    
    console.log("Grupo 35+")
    for (let i = 0; i < array35plus.length; i++){
        console.log(array35plus[i])
    }

    return [array18_25, array26_35, array35plus]
}

const contactosGestionados = gestionarContactos(contactos)
