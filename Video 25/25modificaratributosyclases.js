/*
Atributos
    element.getAttribute('atribute') -> Devuelve el atributo
    element.setAttribute('atribute', value) -> Le asigna un valor al atributo

Clases
    element.classList.add('class', 'class',...) -> Para añadir clases, una o las que queramos separadas por comas.
    element.classList.remove('class', 'class',...) > Para eliminar clases, una o las que queramos separadas por comas.
    element.classList.toggle('class'[,force]) -> Si tiene la clase se la quita y sino la tiene se la pone
    element.classList.contains('class') -> Devuelve true o false en función de si tiene la clase o no
    element.classList.replace('oldClass', newClass) -> sustituye una clase por otra

Atributos directos
    id
    value
*/

const title = document.getElementById('title')
const name = document.getElementById('name')

//console.log(title)
//console.log(name)

//ATRIBUTOS
//Ejemplo: getAtribute('id')*/
//console.log(name.getAttribute('type'))

/*Ejemplo: setAttribute*/
//name.setAttribute('type','date')

//CLASES
/*Ejemplo: element.classList.add*/
//title.classList.add('main-title','other-title')

/*Ejemplo: element.classList.remove*/
//title.classList.remove('title')

/*Ejemplo: element.classList.toggle*/
/* if(title.classList.contains('title')) console.log('Title tiene la clase title')
else console.log('Title no tiene la clases title') */

/* Ejemplo: element.classList.replace */
//title.classList.replace('title','main-title')

//ATRIBUTOS DIRECTOS:

/* console.log(title)
console.log(name) */

/* Ejemplo id:

console.log(title.innerHTML)
console.log(title.textContent) 

//Ejemplo: value
console.log(name.value) /*Para validar formulario no se puede evaluar el id sino el value del formulario*/
