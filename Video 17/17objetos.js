/* const person = {
    name: 'Juan',
    age: 26,
    sons: ['Laura', 'Diego', 'Pepe', 'Rosa', 'Tomas']
} */

/* console.log(person.name);
console.log(person['name']); *//*Lo puedo colocar entre corchetes 
pero debo ponerle comillas*/

/* const person = {
    name: 'Juan',
    age: 26,
    sons: ['Laura', 'Diego', 'Pepe', 'Rosa', 'Tomas']
} */

/* for(const key in person){
    console.log(key);
}

for(const key in person){
    console.log(person[key]);
} */

/* const person = {
    name: 'Juan',
    age: 26,
    sons: ['Laura', 'Diego', 'Pepe', 'Rosa', 'Tomas']
}

for(const son of person.sons){
    console.log(son);
} */

const person = {
    name: 'Juan',
    age: 26,
    sons: ['Laura', 'Diego', 'Pepe', 'Rosa', 'Tomas']
}

/*Para imprimir todo el objeto como una frase*/
console.log(`Hola ${person.name}. Tienes ${person.age} años y tus hijos se llaman ${person.sons.join(', ')}`); 
