/*
let i = 0;

while(i < 5){
    
    console.log("indice: "+i)
    i = i + 1
    
    //i++;
}
*/

/*
let inicie_sesion = false

//se ejecuta solo si su condición es verdadera.
while(!inicie_sesion){

    let nombre = prompt("nombre usuario")
    let contrasenia = prompt("ingrese su contraseña")

    //si el usuario se loggeó de manera correcta
    if(nombre == "admin" && contrasenia == "1234"){
        
        console.log("Bienivenido Admin!")
        inicie_sesion = true;

    }else{
        console.log("Usuario o contraseña incorrecta.")
    }

}
*/

/*
let rta = "ESC"

do{

    let nombre = prompt("Ingrese su nombre")
    console.log("Bienvenido: "+nombre)
    rta = prompt("Desea seguir presentandose? (Ingrese ESC para salir)")

    //se ejecuta al menos 1 vez.
}while(rta != "ESC")

*/


/*
let i = 0;

while(i < 10){
    
    console.log("indice: "+i)
    i = i + 1
    
    //i++;
}
*/
/*
for (let i = 1; i <= 3; i++) {
    // En cada repetición solicitamos un nombre.
    let ingresarNombre = prompt("Ingresar nombre");
    // Informamos el turno asignado usando el número de repetición (i).
    alert(" Turno  N° "+i+" Nombre: "+ingresarNombre);
}
*/
/*
for (let i = 0; i < 10; i++) {
    
    console.log("Indice: "+i)
    break
    
}
*/
/*
for (let i = 0; i < 10; i++) {
    console.log("Indice: "+i)

    continue
    console.log("Me ignora :( "+i)
}
*/

/*
let entrada = prompt("Ingresar un nombre").toUpperCase();
//Repetimos hasta que se ingresa "ESC"
while (entrada != "ESC") {
    switch (entrada) {
        case "ANA":
            alert("HOLA ANA");
            break;
        case "JUAN":
            alert("HOLA JUAN");
            break;
        default:
            alert("¿QUIÉN SOS?")
            break;
    }
    entrada = prompt("Ingresar un nombre(Ingrese ESC para salir)").toUpperCase();
}
*/

//calculadora
let numA = "a";
let numB = "b";
let resultado;
let rta = ""

do {

    let operacion = prompt("Qué operación desea realizar?(suma,resta,multiplicacion,division)")

    console.log(isNaN(numA))

    numA = "a"
    while (isNaN(numA)) {
        numA = Number(prompt("Ingrese el numero A"))
    }

    numB = "b"
    while (isNaN(numB)) {
        numB = Number(prompt("Ingrese el numero B"))
    }

    switch (operacion) {
        case "suma":
            resultado = numA + numB
            alert("El resultado de la suma es: " + resultado)
            break;
        case "resta":
            resultado = numA - numB
            alert("El resultado de la resta es: " + resultado)
            break;
        case "multiplicacion":
            resultado = numA * numB
            alert("El resultado de la multiplicación es: " + resultado)
            break;
        case "division":
            if(numB <= 0){
                
                numB = "a"
                while (isNaN(numB) || numB <= 0 ) {
                    numB = Number(prompt("Ingrese el numero B"))
                }

                resultado = numA / numB
                alert("El resultado de la división es: " + resultado)
            }else{
                resultado = numA / numB
                alert("El resultado de la división es: " + resultado)
            }
            break;
        default:
            alert("De esa no vendemos acá")
            break;
    }

    rta = prompt("Ingrese ESC para salir, o realice otra operación")

} while (rta != "ESC")