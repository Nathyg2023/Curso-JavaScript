/*
Arrays - Métodos II

.from(iterable) -> COnvierte en array el elemento iterable*/

/*let word = 'Hola mundo'

console.log(Array.from(word));
console.log(word.split(''));*/

/*
.sort([canllback]) -> Ordena los elementos de un array alfabeticamente (valor unicode), si le pasamos un callback los ordena en función del algoritmo que le pasemos.*/

/*const letters = ['b', 'c', 'z', 'a']
const numbers = [1,8,100,300,3]

console.log(letters.sort());
console.log(numbers.sort());*/ /*No funciona para odenar de mayor a menor*/

/*console.log(numbers.sort((a,b)=>a-b))*/

/*function menorMayor(a,b){
    if (a-b < 0) return -1;
    if (a-b > 0) return 1;
    if(a == b) return 0;
}*/

/*function mayorMenor(a,b){
    if (a-b < 0) return -1;
    if (a-b > 0) return 1;
    if(a == b) return 0;
}*/

/*.forEach(calball(currentValue,[index]))-> Ejecuta la función indicada una vez por cada elemento del array.*/

//const numbers = [12,25,47,84,98]

/*numbers.forEach((number, index) => console.log(number))*/

/*numbers.forEach((number, index) => 
console.log(`${number} está en la posición ${index}`))*/

/*.some(calback)-> Comprueba si al menos uno de los elementos del array cumple la condición*/

/*.every(callback -> Comprueba si TODOS los elementos del array cumplen la condición*/

/*Ejemplo de los dos*/
/*const words = ['HTML', 'CSS', 'JavaScript', 'PHP']

console.log(words.some(word => word.length>10));
console.log(words.every(word => word.length>3));*/

/*.map(callback)-> Transforma todos los elementos del array y devuelve un nuevo array*/

/*const numbers = [12,25,47,84,98]

const numbers2 = numbers.map(number => number*2)

console.log(numbers2);*/

/*.filter(callback)-> Filtra todos los elementos del array que cumplan la condición y devuelve un nuevo array*/

/*const numbers = [12,25,47,84,98]

const numbers2 = numbers.filter(number => number>40)

console.log(numbers2);*/

/*.reduce(callback)-> Reduce todos los elementos del array a un único valor*/

/*const numbers = [1,2,3,4,5]

console.log(numbers.reduce((a,b) => a+b));*/

/*Ejemplo*/

/*const users = [
    {
        name: 'user 1',
        online: true
    },
    {
        name: 'user 2',
        online: true
    },
    {
        name: 'user 3',
        online: false
    },
    {
        name: 'user 4',
        online: true
    },
    {
        name: 'user 5',
        online: false
    },
    {
        name: 'user 6',
        online: true
    },
]

const usersOnline = users.reduce((cont, user) => {
    if (user.online) cont++
    return cont
},0)

console.log(`Hay ${usersOnline} usuarios conectados`);*/



