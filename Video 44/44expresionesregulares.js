/*
Expresiones regulares: Son una secuencia que forma un patrón de búsqueda, principalmente utilizada para la busqueda de patrones de cadenas de caracteres u operaciones de sustituciones.

    Sintaxis:
    /patron/
    Banderas:
        i: ignore case. No diferencia entre mayúsculas y minúsculas.
        g: global. Busca de forma global, es decir, no se para después de la primera coincidencia.
*/

const text = document.getElementById('text').textContent
const regEx = /lorem/gi /*Primera forma de hacerlo*/
const regEx2 = new RegExp('lorem', 'gi') /*segunda forma de hacerlo*/
const regEx3 = new RegExp('/lorem/', 'gi') /*tercera forma de hacerlo*/

console.log(regEx.test(text))
console.log(text.includes('Lorem'))