/*Strings*/

/*let cadena = "Hola Mundo";*/

/*PROPIEDADES
length -> Devuelve la longitud de la cadena*/
/*console.log(cadena.length);*/

/*Metodos

Todos los métodos devuelven una cadena nueva,la cadena original no será modificada.*/

/*toUpeerCase() -> Devuelve la cadena a mayúsculas
let cadena = "Hola Mundo";
console.log(cadena.toUpperCase());

let cadenaMayus = cadena.toUpperCase();
console.log(cadenaMayus);*/

/*tolowerCase()-> Devuelve la cadena a minuscula.
let cadena = "Hola Mundo";
console.log(cadena.toLowerCase());*/

/*indexOf(string)-> Devuelve la posición en la que se encuentra el string, sino lo encuentra devuelve -1.
let cadena = "Hola Mundo";
console.log(cadena.indexOf("o"));
console.log(cadena.indexOf("o"));*/

/*replace(valor a buscar, valor nuevo)-> Remplaza el fragmento de la cadena que le digamos y pone el valor nuevo.*/
/*let cadena = "Hola Mundo";
console.log(cadena.replace("Mundo","Youtube"));*/

/*substring(inicio [,fin])-> Extrae los caracteres desde el inicio hasta fin (el final no se incluye).*/
/*let cadena = "Hola Mundo";
console.log(cadena.substring(3));
console.log(cadena.substring(3,7));*/

/*slice(inicio[,fin])-> Igual que substring pero admite valores negativos, si ponemos valores negativos empezará desde atrás, sino incluye el final extrae hasta el fin. 
(2,-4)-> Empieza a contar en el tercer caracter y los 4 últimos no los considera.*/
/*let cadena = "Hola Mundo";
console.log(cadena.slice(-3));
console.log(cadena.slice(2));
console.log(cadena.slice(0,-6));*/

/*trim()-> Elimina los espacios al inicio y al final de la cadena*/

/*let cadena2 = "Hola youtube, estamos trabajando con cadenas";

console.log(cadena2.trim());*/

/*startswith(valor[,inicio]);-> Sirve para saber si la cadena empieza con ese valor. Devuelve true o false.*/
/*let cadena = "Hola Mundo";
console.log(cadena.startsWith("H"));
console.log(cadena.startsWith("h"));
console.log(cadena.startsWith("M",5));*/

/*endsWith(valor[,longitud])-> Sirve para saber si la cadena termina con ese valor. Devuelve true o false.*/
/*let cadena = "Hola Mundo";
console.log(cadena.endsWith("o"));
console.log(cadena.endsWith("a",4));
console.log(cadena.endsWith("n",8));
console.log(cadena.endsWith("Mundo"));*/

/*includes(valor[,inicial]); -> Igual que indexOf pero devuelve true o false.*/
/*let cadena = "Hola Mundo";
console.log(cadena.includes("n"));
console.log(cadena.includes("a",5));
console.log(cadena.includes("a",2));*/

/*let cadena3 = "Hola";*/

/*repeat(valor)-> Repite el string el número de veces que le indiquemos.*/

/*console.log(cadena3.repeat(3*));
console.log("r".repeat(10));*/

/*Template Strings*/

let nombre = "Juan";
let apellido = 'Gomez';
let edad = 20;

console.log('Hola ' + nombre + ' ' + apellido + ' . Tienes ' + edad + ' años.');

console.log(`Hola ${nombre} ${apellido}. Tienes ${edad} años. `);

console.log(`Hola ${nombre} ${apellido}. El año que viene tendrás ${edad+1} años. `);



