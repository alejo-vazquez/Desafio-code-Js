let edades
let promedio
let suma = 0

let numeroDeEdades = parseInt(prompt("Digite cual es la cantidad de personas registradas: "))

for (i = 0; i< numeroDeEdades; i++) {
    let edades = parseInt(prompt("Digite las edades: " + i))
    suma = suma + edades
    if (edades < 18) {
        console.log("Es menor de edad: " + edades);
    }else if (edades >= 60) {
        console.log("Es una persona mayor: " + edades);
    }else{
        console.log("La edad es: " + edades);
    }
}

promedio = suma / numeroDeEdades

alert("El promedio de las edades es: " + promedio)

console.log("El promedio de las edades es: " + promedio); 