/*Desarrolla un programa que permita calcular el area o perimetro de algunas figuras planas segun la  
siguiente tabla: 
Area y perimetro de figura planas 
*/
// R//: podemos crear funciones para cada calculo y luego utilizar un menu para que el usuario elija
// la figura y el calculo que desea realizar 

// definimos las funciones para calcular el area y el perimetro de cada figura 
// funcion para calcular el area del cuadrado 
function calcularAreaCuadrado(lado){
    return lado * lado 
}

// funcion para calcular el perimetro del cuadro 
function calcularPerimetroCuadrado(lado){
    return 4 * lado
} 

// funcion para calcular el area del circulo 
function calcularAreaCirculo(radio){
    return  Math.PI * radio
} 

// funcion para calcular el perimetro del circulo 
function calcularPerimetroCirculo(radio){
    return 2 * Math.PI * radio
} 

// funcion para calcular el area del triangulo 
function calcularAreaTriangulo(base , altura){
    return (base * altura) / 2
} 

// funcion para calcular el perimetro del triangulo 
function calcularPerimetroTriangulo(lado1, lado2, lado3){
    return lado1 + lado2 + lado3
} 
// Funcion para mostrar el menu y solicitar la figura y el calculo al usuario 
function mostrarMenu(){
    console.log("selecione la figura:")
    console.log("1. cuadrado") 
    console.log("2. circulo")
    console.log("3. triangulo") 
    let opcion = parseInt(prompt("Ingrese el numero de la figura:")) 
    switch(opcion){
        case 1: 
        let ladoCuadrado = parseFloat(prompt("Ingrese la medida del lado del cuadrado")) 
        console.log("seleccione el calculo:") 
        console.log("1. Area") 
        console.log("2. Perimetro")
        let opcionCalculoCuadrado = parseInt(prompt("Ingrese el numero del calculo:"))
        if(opcionCalculoCuadrado === 1){
            console.log("El area del cuadrado es:" + calcularAreaCuadrado(ladoCuadrado))
        }else if(opcionCalculoCuadrado === 2){
            console.log("El perimetro del cuadrado es:" + calcularPerimetroCuadrado(ladoCuadrado))
        } else{ 
            console.log("Opcion no valida")

        } 
        break 
        case 2:  
        let radioCirculo = parseFloat(prompt("Ingrese el radio del circulo"))
        console.log("selecciones el calculo:") 
        console.log(" 1. Area") 
        console.log(" 2. Perimetro") 
        let opcionCalcularCirculo = parseInt(prompt("Ingrese el numero del calculo")) 
        if(opcionCalcularCirculo === 1){
            console.log("El area del circulo es: " + calcularAreaCirculo(radioCirculo))
        } else if(opcionCalcularCirculo === 2){
            console.log("El perimetro del circulo es: " + calcularPerimetroCirculo(radioCirculo))
        }else{
            console.log("Opcion no valida")
        } 
        break 
        case 3: 
        let baseTriangulo = parseFloat(prompt("Ingrese la base del triangulo")) 
        let alturaTriangulo = parseFloat(prompt("Ingrese la altura del triangulo")) 
        console.log("Seleccione el calculo:")
        console.log("1. Area")
        console.log("2. Perimetro")
        let opcionCalculoTriangulo = parseInt(prompt("Ingrese el numeor del calculo:")) 
        if(opcionCalculoTriangulo === 1){
            console.log("El area del triangulo es: " + calcularAreaTriangulo(baseTriangulo, alturaTriangulo))
        } else if(opcionCalculoTriangulo === 2){
            let lado1Triangulo = parseFloat(prompt("Ingrese el lado 1 del triangulo"))
            let lado2triangulo = parseFloat("Ingrese el lado 2 del triangulo") 
            console.log("El perimetro del triangulo es: " + calcularPerimetroTriangulo(baseTriangulo, lado1Triangulo, lado2triangulo))
        }else{
            console.log("Opcion no valida")
        } 
        break 
        default: 
        console.log("Opcion no valida")
    }
}  
// llamar a la funcion 
mostrarMenu() 

// segunda manera 
 // definimos las medidas de las figuras 
//  let ladoCuadrado = 5 
//  let radioCirculo = 3
//  let baseTriangulo = 4 
//  let alturaTriangulo = 6 
//  let lado1Triangulo = 3
//  let lado2triangulo = 4 

//  // calculamos el area y el perimetro de cada figura 
//  let  areaCuadrado = ladoCuadrado * ladoCuadrado 
//  let perimetroCuadrado = 4 * ladoCuadrado 

//  let areaCirculo = Math.PI * radioCirculo * radioCirculo 
//  let perimetroCirculo = 2 * Math.PI * radioCirculo 

//  let areaTriangulo = (baseTriangulo * alturaTriangulo) / 2 
//  let perimetroTriangulo = baseTriangulo + lado1Triangulo + lado2triangulo
//  // mostramos los resultados 
//  console.log("Area del cuadrado:", areaCuadrado) 
//  console.log("Perimetro del cuadrado:", perimetroCuadrado) 
//  console.log("Area del circulo:", areaCirculo)
//  console.log("Perimetro del circulo:", perimetroCirculo)
//  console.log("Area de triangulo:", areaTriangulo)
//  console.log("Perimetro del traingulo:", perimetroTriangulo)