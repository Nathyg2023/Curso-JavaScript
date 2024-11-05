//parent.insertBefore(newElement, referenceElement) -> Insertar un elemento antes del elemento de referencia*/

//SOPORTE TOTAL
//parent.insertAdjacentElement(position, element)
//parent.insertAdjacentHTML(position, HTML)
//parent.insertAdjacentText(position, text)

//POSICIONES DONDE SE INSERTA:
//beforebegin -> Antes de que empiece (hermano anterior)
//afterbegin -> después de que empiece (primer hijo)
//beforeend -> antes de que acabe(último hijo)
//afterend -> después de que acabe (hermano siguiente)

//parent.replaceCHild(newChild, oldChild) -> Reemplaza un hijo por otro.

/* const list = document.getElementById('list')
const newElement = document.createElement('li')
newElement.textContent = "I'm a new element" */

//list.insertBefore(newElement, list.children[1])

//list.children[0].insertAdjacentElement("beforebegin", newElement)
//list.insertAdjacentElement("afterbegin", newElement)
//list.insertAdjacentElement("beforebegin", newElement)
//list.children[1].insertAdjacentElement('beforeend', newElement)
//list.children[1].insertAdjacentElement('afterend', newElement)

//list.children[1].insertAdjacentHTML('afterend', '<li>Elemento con HTML</li>')
//list.children[1].insertAdjacentText('afterend', '<li>Elemento con HTML</li>')


/* const list = document.getElementById('list')
const newElement = document.createElement('li')
newElement.textContent = "I'm a new element" */

//DOM manipulación convenience methods - JQuery Like
//POSITION:
//parent.before()-> Antes de que empiece (hermano anterior)
//list.children[0].before(newElement)

//parent.prepend()-> después de que empiece (primer hijo)
//list.prepend(newElement)

//parent.append()-> antes de que acabe (ultimo hijo)
//list.append(newElement)

//parent.after()-> después de que acabe (hermano)
//list.children[1].after(newElement)

//PARA REEMPLAZAR: child.replacewith(newchild)
//document.getElementById('child-to-replace').replaceWith(newElement)

const list = document.getElementById('list')
const newElement = document.createElement('li')
newElement.textContent = "I'm a new element"


//CLONAR Y ELIMINAR ELEMENTOS:
//element.cloneMode(true|false) -> Clona el nodo. SI le pasamos true clona todo el elemento con los hijos, si le pasamos false clona solo el elemento sin hijos.
//list.after(list.cloneNode(true))

//element.remove() -> Elimina el nodo del DOM
//list.removeChild(list.children[1])

//element.removeChild(child)-> Elimina el modo hijo del DOM
//list.remove()

 