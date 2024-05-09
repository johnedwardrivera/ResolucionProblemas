// Escriba un programa que lea dos vetores de numeros enteros ordenados ascendentemente 
// y luego produzca la lista ordenada de la mezcla de los dos, por ejemplo, si 
// los dos arreglos tienen los numeros 1 3 6 17 y 2 4 10 17, respectivamente, 
// la lista de numeros en la pantalla debe ser 1 2 3 4 6 9 10 17 17 limite 
// los vectores a un tmaño de 5 y debe validar en cada ingreso que realmente 
// se esten ingresando los datos de forma ascendente 
//  R//: solicitamos al usuario que ingrese los elementos de los dos 
// vectores, validando que esten ordenados ascendentemente, luego combina y ordena
// los vectores para producir la lista ordenada de la mezcla de los y la muestre
// en la consola 
// funcion para leer un vector de numeros enteros ordenados ascendentemente 
function leerVector(tamaño){
    let vector = [] 
    for(let i = 0; i < tamaño; i++){
        let numero = parseInt(prompt("Ingrese el numero" + (i +1) + ":")) 
        if(i > 0 && numero <= vector[i -1]){
            alert("El numero debe ser mayor que el anterior. Intente nuevamente") 
            i-- // reintentar ingresar el numero
        }else{
            vector.push(numero)
        }
    } 
    return vector
} 
// leemos los dos vectores de numeros enteros ordenados ascendentemente 
let tamaño = 5 
console.log("Ingrese los elementos del primer vector ordenado ascendentemente") 
let vector1 = leerVector(tamaño) 
console.log("Ingrese los elementos del segundo vector ordenado ascendentemente") 
let vector2 = leerVector(tamaño) 
// combinar y ordenar los vectores
let indice1 = 0
let indice2 = 0 
let vectorMezclado = [] 
while(indice1 < tamaño || indice2 < tamaño){
    if(indice1 === tamaño){
        vectorMezclado.push(vector2[indice2++])
    }else if(indice2 === tamaño){
        vectorMezclado.push(vector1[indice1++])
    }else if(vector1[indice1] < vector2[indice2]){
        vectorMezclado.push(vector1[indice1++])
    }else{
        vectorMezclado.push(vector2[indice2++])
    }
} 
// mostramos la lista ordenada de la mezcla de los dos vectores 
console.log("La lista ordenada de la mezcla de los dos vectores:") 
console.log(vectorMezclado.join(" "))