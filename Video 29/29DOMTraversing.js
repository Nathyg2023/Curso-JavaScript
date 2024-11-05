/*DOM - Recorrerlo (DOM Traversing)*/

/*
Padre - parent (Nodo del que desciende):
    parentNode -> Devuelve el nodo padre (que puede no ser un elemento)
    parentElement -> Devuelve el nodo elemento padre

    NOTA: Los nodos del tipo Document y DocumentFragment nunca van a tener un elemento padre, parentNode devolverá siempre null.

    //const parent = document.getElementById('parent')

    //console.log(parent.parentNode);

    /*Para ir subiendo de niveles sería así: 
    console.log(parent.parentElement.parentElement)*/

/*Hijos - child (Nodo que desciende de un padre):*/

    //childNodes -> Devuelve todos los nos hijos

    /* const parent = document.getElementById('parent')

    console.log(parent.childNodes) */


    //children -> Devuelve todos los nodos elementos hijos

    /* const parent = document.getElementById('parent')

    console.log(parent.children) */ 


    //firstChild -> Devuelve el primer nodo hijo.

    //firstElementChild -> Devuelve el primer nodo elemento hijo

    /* const parent = document.getElementById('parent')

    console.log(parent.firstChild)
    console.log(parent.firstElementChild) */


    /*lastChild -> Devuelve el último nodo hijo
    lastElementChild -> Devuelve el último nodo del elemento hijo*/

    /* const parent = document.getElementById('parent')

    console.log(parent.lastChild)
    console.log(parent.lastElementChild) */


    //hasChildNodes() -> Devuelve true si el nodo tiene hijos y false si no tiene.

    /* const parent = document.getElementById('parent')

    console.log(parent.hasChildNodes()) */


/*Hermanos - siblings (Nodo al mismo nivel)*/
    //nextSibling -> Devuelve el siguiente nodo hermano
     //nextElementSibling 
    /* const parent = document.getElementById('parent')

    console.log(parent.nextSibling)
    console.log(parent.nextElementsSibling) */
    
    //previousElementSibling

    const parent = document.getElementById('parent')

    console.log(parent.previousSibling)
    console.log(parent.previousElementSibling)

//Cercano:
    //closest(selector) -> Selecciona el nodo más cercano que cumpla con el selector, aún es experimental.*/

    
 