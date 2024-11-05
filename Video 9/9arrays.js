/* • Son estructuras que nos permiten almacenar varios datos y agruparlos.
• Se pueden llenar con cualquier tipo de dato válido en JS y deben ir separados por comas.
• Se pueden mezclar tipos de datos pero no es recomendable.
• Se declaran con llaves cuadradas o corchetes.
• Pueden declararse vacíos o son un contenido ya establecido.
• Pueden añadirse o eliminarse elementos cuando queramos.
• Cada elemento del array puede ser identificado por su índice, es decir, su posición y empiezan a contar de 0.
    ○ let array = [ ] -> Array declarado vacío
let array = [1,2,3,4,5] -> Array declarado lleno */


let numeros=[1,2,3,4,5,6];

let palabras=['Hola', 'estamos', 'en', 'YouTube'];

let booleans=[true, true, false];

/*Ejemplos con números*/
console.log(numeros);

console.log(numeros[5]);

console.log(numeros[0] + numeros[1]);

/*Ejemplos con palabras*/
console.log(palabras[1]);

console.log(palabras[1].length);

console.log(`La palabra ${palabras[3]} tiene ${palabras[3].length} letras`);

