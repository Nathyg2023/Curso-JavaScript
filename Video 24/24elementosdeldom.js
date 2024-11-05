/*
document.getElementById('id') -> se utiliza para acceder a un elemento específico en el documento HTML utilizando su identificador único (ID). Cada elemento en una página web puede tener un ID único asignado, lo que permite que JavaScript lo encuentre y manipule de manera fácil y eficienteAcceder a un elemento a través de su id

document | element
.querySelector('selectorCSS') -> se utiliza para seleccionar el primer elemento que coincida con un selector CSS especificado dentro del documento HTML

document | element
.querySelectorAll('selectorCSS') -> se utiliza para seleccionar todos los elementos que coinciden con un selector CSS especificado dentro del documento HTML. A diferencia de document.querySelector, que devuelve solo el primer elemento que coincide con el selector, document.querySelectorAll devuelve una lista de todos los elementos que cumplen con el criterio de selección
*/

//Ejemplo: document.getElementById('id') 
//const title = document.getElementById('title')

/*textcontent: Proporciona acceso y permite obtener o modificar el contenido de texto dentro de un elemento*/
//title.textContent = 'DOM - Accediendo a nodos'

//Ejemplo: document.querySelector('selectorCSS')

//const paragraph = document.querySelector('.paragraph')

//const span = document.getElementById('title').querySelector("span")

const paragraphs = document.querySelectorAll('.paragraph')

//const paragraphsSpread = [...document.querySelectorAll('.paragraph')]

const paragraphsArray = Array.from(document.querySelectorAll('.paragraph'))

paragraphs[0].style.color = 'red'

//paragraphsSpread.map(p=>p.style.color='green')

paragraphsArray.map(p=>p.style.color='blue')

