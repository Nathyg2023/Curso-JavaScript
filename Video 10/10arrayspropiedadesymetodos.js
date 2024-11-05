/*Arrays*/

/*Arrays-Propiedades*/

    /*Propiedad length: Devuelve el número de posiciones que tiene el array.*/

   /*  let numbers = [1,2,3,4,5,1];

    console.log(numbers.length);
 */

/*Arrays-Métodos*/

    /*Array.isArray(variable a evaluar)-> Devuelve true si la variable es un array*/

    /* let number = 4;
    let numbers = [1,2,3,4,5,1]

    console.log(Array.isArray(number));
    console.log(Array.isArray(numbers)); */

    /*¿Cómo eliminar un elemento del array?

    .shift() -> Elimina el primer elemento del array y devuelve ese elemento

    .pop() -> Elimina el último elemento del array y devuelve ese elmento*/

    //let numbers = [1,2,3,4,5]

    //console.log(numbers);
    /* numbers.shift();
    console.log(numbers); */
    /* numbers.pop();
    console.log(numbers); */
    //let deleteElement = numbers.shift();

    /* console.log(deleteElement); (Para guardar el elemento que hemos eliminado)
    console.log(numbers);
    */

    /*¿Cómo añadir elementos al array?

    .push(element1, element2,...) -> Añade uno o más elementos al final del array y devuelve la nueva longitud.

    .unshift(element1, element2,...) -> Añade uno o más elementos al comienzo del array y devuelve la nueva longitud.*/

    /* let numbers = [1,2,3,4,5]

    console.log(numbers);
    let newLength = numbers.push(6);
    console.log(numbers); */
    //console.log(newLength);
    /* let newLength2 = numbers.unshift(0);
    console.log(numbers); */

    /*.indexOf()-> Devuelve el primer indice del elemento que conincida con el valor especificado, ó -1 si ninguno es encontrado.*/
    /* let numbers = [1,2,3,4,5]
    console.log(numbers);
    console.log(numbers.indexOf(2)); */

    /*.lastIndexOf()-> Devuelve el último indice del elemento que coincida con el valor especificado, ó -1 si ninguno es encontrado.*/
    
   /*  let numbers = [1,2,3,4,5,1]

    console.log(numbers);
    console.log(numbers.lastIndexOf(1)); */

    /*.reverse()-> Invierteel orden de los elementos del array*/
    
   /*  let numbers = [1,2,3,4,5,1]
    
    console.log(numbers);
    numbers.reverse();
    console.log(numbers); */

    /*.join(`separador`)->Devuelve un string con el separador que indiquemos, por defecto son comas*/

    /* let numbers = [1,2,3,4,5,1]

    console.log(numbers);
    console.log(numbers.join('-'));
    
    let arrayString = numbers.join(' ');
    console.log(arrayString);
    console.log(numbers.join('-')); */

    /*.splice(a,b,items) -> Cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.
    a - Indice de inicio.
    b - Número de elementos (opcional)
    items - Elementos a añadir en el caso de que se añadan.(opcional)*/

    //let numbers = [1,2,3,4,5,1]

    //console.log(numbers);
    //numbers.splice(3) /* Elimina desde la posición 3 hasta el final */
    //numbers.splice(2,2); /* EL primer valor elimina indica la posición desde donde va a borrar y el segundo la cantidad de elementos que borrará, es decir, eliminó el 3 y 4*/
    //numbers.splice(2,2,10,23,54); /* Si b es un valor distinto de 0 elimina el número de valores que indiquemos en b y añade los valores de items a partir de posición a */
    //numbers.splice(4,0,10,23,54); /* Si b vale 0 añade los elementos a partir de la posición a y no elimina ninguno. */
    //console.log(numbers);

    /*.slice(a,b) -> Extrae elementos de un array desde el indice a hasta el indice b. Si no existe b lo hace desde a hasta el final, sino existe ni a ni b hace una copia del original*/

    /* let numbers = [1,2,3,4,5,1];
    let newNumbers = numbers.slice();
    
    console.log(numbers);
    console.log(newNumbers); */

    /* let numbers = [1,2,3,4,5,1]
    let newNumbers = numbers.slice(2);

    console.log(numbers);
    console.log(newNumbers); */ 

    let numbers = [1,2,3,4,5,1]
    let newNumbers = numbers.slice(2,4);
    
    console.log(numbers);
    console.log(newNumbers);


    








