/*Spread operator-> Su sintaxis es ...*/

/*const numbers = [-12, 2, 3, 23, 43, 2, 3]*/

/*console.log(...numbers)*/

//Ejemplo 1: Enviar elementos en un array a una función

/*const addNumbers = (a, b, c) => {
    console.log(a+b+c)
}

let numbersToAdd = [1,2,3]

addNumbers(...numbersToAdd)*/

//Ejemplo 2: Añadir un array a otro array
/*let users = ['javier', 'david', 'rosa', 'juan', 'mercedes']

let newUsers = ['marta', 'jaime', 'laura']

users.push(...newUsers)

console.log(users);*/

//Ejemplo : cómo copíar arrays

/*let arr1 = [1, 2, 3, 4, 5]
let arr2 = [...arr1]

console.log(arr2);*/

//Ejemplo: cómo concatenar arrays

/*let arr1 = [1, 2, 3, 4, 5]
let arr2 = [6, 7, 8]

let arrConcat = [...arr1, ...arr2]
console.log(arrConcat);*/

//Ejemplo: parámetros REST para indicar que se recibirán múltiples argumentos en forma de arreglo

/*const restParms = (...numbers) => {
    console.log(numbers)
}

restParms(1,2,3,4,5,6,7,8)*/

/*Ejemplo: libreria math*/
/*const numbers = [-12, 2, 3, 23, 43, 2, 3]

console.log(Math.max(...numbers))
console.log(Math.min(...numbers))*/

/*Ejemplo: Eliminar elementos duplicados*/

const numbers = [-12, 2, 3, 23, 43, 2, 3]

console.log(...new Set(numbers));