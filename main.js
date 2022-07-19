let edades
let promedio
let suma = 0

let NEdades = parseInt(prompt("Digite cual es la cantidad de personas registradas: "))

for (i = 0; i< NEdades; i++) {
    let edades = parseInt(prompt("Digite las edades: " + i))
    suma = suma + edades
}

promedio = suma / NEdades

alert("El promedio de las edades son: " + promedio)

console.log("El promedio de las edades son: " + promedio);