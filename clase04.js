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

console.log(calcularPotencia(3, -3));



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