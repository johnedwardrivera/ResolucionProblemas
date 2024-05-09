/* primero crearemos una funcion que solicite al usuario ingresar las edades
y valide que esten dentro del rango especificado ( entre 1 y 120 años) y luego
utilizaremos esta funcion para llenar un vector con las edades ingresadas y despues
 realizaremos los calculos necesarios para determinar la cantidad de personas menores
  de edad, mayores de edad, adultos mayores, la edad mas baja, la edad mas alta y el 
  promedio de edades ingresadas */ 

  // lo haremos sin usar un funcion  
  // vetor para almacenar las edades de las 10 personas 
  let edades = [] 
  // variables para contar la cantidad de personas menores, mayores y adultos mayores 
  let menoresEdad = 0
  let mayoresEdad = 0 
  let adultosMayores = 0 
  // variables para almacenar la edad mas baja, la edad mas alta y la suma de todas las 
  // edades 
  let edadMasBaja = 120 // empezamos con un valor alto que seguro sera meyor que cualquier edad valida 
  let edadMasAlta = 0 // emprezamos con un valor bajo que seguro sera menor que cualquier edad valida
  let sumaEdades = 0 
  // solicitamos al usuario que ingresen las edades 
  for(let i = 0; i< 10; i++){
    let edad = parseInt(prompt("Ingrese la edad de la persona" + (i+1) + ":")) 
    while(isNaN(edad) || edad < 1 || edad > 120){
        alert("La edad debe ser un numero entre 1 y 120 años. Intente nuevamente")
        edad = parseInt(prompt("Ingrese la edad de la persona" + (i+1) + ":"))
    } 
    // actualizamos la cantidad de personas menores, mayores y adultos mayores 
    if(edad < 18) {
        menoresEdad++
    }else{
        mayoresEdad++ 
        if(edad >= 60){
            adultosMayores++
        }
    } 
    // actualizamos la edad mas baja, la edad mas alta y la suma de todas las edades 
    if(edad < edadMasBaja){
        edadMasBaja = edad
    } 
    if(edad > edadMasAlta){
        edadMasAlta = edad
    } 
    sumaEdades += edad 
    edades.push(edad) // agregamos la edad al vetor
  } 
  // Calcular el promedio de las edades 
  let promedioEdades = sumaEdades / 10 
  // mostramos el resultado 
  console.log("Cantidad de personas menores de edad:", menoresEdad) 
  console.log("cantidad de personas mayores de edad:", mayoresEdad) 
  console.log("cantidad de personas adultas mayores", adultosMayores) 
  console.log("edad mas baja", edadMasBaja)
  console.log("edad mas alta", edadMasAlta) 
  console.log("promedio de edades", promedioEdades.toFixed(2))