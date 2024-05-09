// Una emisora con presencia en diferentes ciudades desea conocer el rating 
// de canciones y cantantes más escuchados (sonados) en este semestre del año. Por 
// lo tanto, se ha pedido a estudiantes del SENA del programa de tecnólogo en análisis 
// y desarrollo de software desarrollar una solución que permita conocer la respuesta de 6 personas 
// con relación a sus gustos musicales, con fines administrativos y realizar una rifa entre las personas
// encuestadas, la emisora desea poder registrar de las personas entrevistadas su nombre, número de 
// identificación(cedula) fecha de nacimiento, correo electrónico, ciudad de residencia, ciudad de origen, 
// además se deberá poder almacenar el artista y título de hasta 3 canciones favoritas en cada una de las 
// personas que ingresen, teniendo en cuenta o anterior, se sugiere que la solución deberá mostrar un menú
// que permita las siguientes 
// opciones: 
// a.	Agregar una persona con los datos que se listan anteriormente 
// b.	Mostrar la información personal de una persona particular por medio de su posición en el vector 
//permitimos al usuario agregar personas con sus datos y canciones favoritas, asi como mostrar
//la informacion personal de una persona particular por su posicion en el vector 
// vector para almacenar las personas y sus datos 
let personas =[] 
// menu principal 
let opcion
do{
    console.log("\nMenu:")
    console.log("a. Agregar una persona")
    console.log("b. Mostrar la informacion personal de una persona particular")
    console.log("x. Salir") 
    opcion = prompt("Ingrese la opcion deseada:") 
    switch(opcion){
        case 'a': 
        //agregar una persona  
        let nombre = prompt("Ingrese el nombre de la persona:")
        let cedula = prompt("Ingrese el numero de cedula de la persona")
        let fechaNacimiento = prompt("Ingrese la fecha de nacimiento de la persona")
        let correoElectronico = prompt("Ingrese el correo electronico de la persona")
        let ciudadResidencia = prompt("Ingrese la ciudad de residencia de la persona")
        let ciudadOrigen = prompt("Ingrese la ciudad de origen de la persona")
        let cancionesFavoritas = [] 
        for(let i= 0; i < 3; i++){
            let cancion = prompt("Ingrese el nombre de la cancion favorita" + (i+1) + "de la persona") 
            cancionesFavoritas.push(cancion)
        } 
        personas.push({
            nombre: nombre, 
            cedula: cedula,
            fechaNacimiento: fechaNacimiento,
            correoElectronico: correoElectronico,
            ciudadResidencia: ciudadResidencia,
            ciudadOrigen: ciudadOrigen, 
            cancionesFavoritas: cancionesFavoritas
        }) 
        console.log("personas agregadas") 
        break 
        case 'b': 
        // mostramos la informacion de una persona particular
        let posicion = parseInt(prompt("Ingrese la posicion de la persona en el vector"))
        if(!isNaN(posicion) && posicion >=1 && posicion <= personas.length){
            let persona = personas[posicion - 1] 
            console.log("Nombre:", persona.nombre) 
            console.log("Cedula:", persona.cedula)
            console.log("Fecha de nacimiento", persona.fechaNacimiento)
            console.log("correo electronico", persona.correoElectronico)
            console.log("ciudad de residencia", persona.ciudadResidencia) 
            console.log("Ciudad de origen", persona.ciudadOrigen) 
            console.log("canciones favoritas") 
            persona.cancionesFavoritas.forEach((cancion, index) => {
                console.log(" " + (index + 1) + "." + cancion)
            })

        }else{
            console.log("posicion invalidad")
        } 

        break 
        case 'x': 
        console.log(" hasta luego")
        break 
        default: 
        console.log(" opcion invalidad")
    }
} while(opcion !== 'x')