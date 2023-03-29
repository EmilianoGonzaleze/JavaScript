console.log( Math.E ) // 2.718281828459045
console.log( Math.PI ) // 3.141592653589793


console.log( Math.max(55, 13, 0, -25, 93, 4) ) // 93
console.log( Math.min(55, 13, 0, -25, 93, 4) ) // -25

const pi = Math.PI // 3.141592653589793

// CEIL: devuelve el entero mayor o igual más próximo
console.log( Math.ceil(pi) ) // 4

// FLOOR: devuelve el entero más cercano redondeado hacia abajo
console.log( Math.floor(pi) ) // 3

// ROUND: retorna el valor de un número redondeado al entero más cercano
console.log( Math.round(pi) ) // 3

Math.sqrt(9) // 3
Math.sqrt(2) // 1.414213562373095
Math.sqrt(1)  // 1
Math.sqrt(-1) // NaN

console.log( Math.random() ) // 0.6609867980868442
console.log( Math.random() ) // 0.09291446900104305
console.log( Math.random() ) // 0.6597817047013095

// números entre 0 y 10
console.log( Math.random() * 10 )
// números entre 0 y 50
console.log( Math.random() * 50)
// números entre 20 y 50
console.log( Math.random() * 30 + 20 )


// FECHAS

console.log( new Date() )
// Fri Dec 17 2021 11:35:08 GMT-0300

const casiNavidad = new Date(2021, 11, 25, 23, 59, 59)
console.log(casiNavidad)
// Sat Dec 25 2021 23:59:59 GMT-0300 (hora estándar de Argentina)


