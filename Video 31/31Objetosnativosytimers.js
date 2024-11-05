const button = document.getElementById('button')

/*
Objeto window -> En el objeto global, de él descienden todos
    alert()
    promt()
    confirm()

    window.alert(), window.confirm(), window.prompt(): Muestra cuadros de diálogo al usuario para mostrar mensajes, solicitar confirmación o solicitar entrada de datos
*/
//alert('Hola')
//prompt('Escriba su nombre')
/* if(confirm('Acepta?')){
    console.log('El usuario acepto');
}else{
    console.log('El usuario no acepto')
} */

/*Objeto console -> Es el objeto que contiene la consola del navegador
    https://developer.mozilla.org/es/docs/web/API/COnsole
    console.log()-> Muestra un mensaje informativo en la consola
    console.dir() -> Muestra todas las propiedades del objeto
    console.error() -> Muestra un mensaje de error en la consola
    console.table() ->Muestra una tabla con los datos proporcionados en la consola
*/

/* const person = {
    name: 'Nathy',
    age: 34,
    email: 'nathyyanieris2013@gmail.com'
} */

//console.log(button)
//console.error('error') 
//console.table('person')

/*Objeto location -> Es el objeto que contiene a barra de direcciones*/
    //https://developer.mozilla.org/es/docs/Web/API/Location

    //location.href -> Devuelve la URL completa de la página actual
    //console.log(location.href)

    //location.protocol -> Devuelve el protocolo de la URL (por ejemplo, "http:" o "https:")
    //console.log(location.protocol)

    //location.host -> Devuelve el nombre de dominio y el número de puerto de la URL
    //console.log(location.host)

    //location.pathname -> Devuelve la ruta de la URL
    //console.log(location.pathname)

    //location.hash -> Devuelve el fragmento de la URL (desde el signo de almohadilla '#' en adelante)
    //console.log(location.hash)

    //location.reload() ->  Recarga la página actual
    //location.reload()
    //Adicional para pasar de una página a otra:

    //location.href='https://google.com'

/*Objeto history: representa el historial del navegador, es decir, la lista de URLs visitadas en la ventana actual. Proporciona métodos para navegar por el historial y realizar acciones relacionadas con la navegación, como retroceder o avanzar en las páginas visitadas.*/
    //back() -> Navega hacia atrás en el historial, es equivalente a hacer clic en el botón "Atrás" del navegador.
    //forward() -> Navega hacia adelante en el historial, es equivalente a hacer clic en el botón "Adelante" del navegador
    //go(n|-n) -> : Navega hacia adelante o hacia atrás en el historial según el número n. Un valor positivo de n avanza n páginas, mientras que un valor negativo retrocede n páginas.

    //length -> devuelve el número de entradas en el historial.

/*Objeto date: se refiere a un tipo de dato en programación que se utiliza para representar fechas y horas
    https://developer.mpzolla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Date
    https://www.weschools.com/jsref/jsref_obj_date.asp
*/

/* const date = new Date()

console.log(date.getDay()); */

/*TIMERS*/

//Timeout: se utiliza para programar la ejecución de una función después de un cierto período de tiempo, especificado en milisegundos
//https://developer.mozilli.org/en-US/docs/Web/API/WindowOrworkerGlobalScope/setTimeout

/* button.addEventListener('click', () => {
    const timeout = setTimeout(() => {
        console.log('ADIOS');
    }, 3000)

    clearTimeout(timeout)
}) */

/* const timeout = setTimeout(() =>{
    console.log('ADIOS');
}, 3000) */ 


//setTimeout(()=> {code}, delay-in-miliseconds) - Hace que se ejecute la función después de delay. Si lo referenciamos mediante una variable/constante podemos pararlo con clearTimeout(referencia)

/* button.addEventListener('click', () => {
    clearTimeout(timeout)
})



//Interval:
//https://developer.mozilla.org/en-US/docs/Web/API/WindowOrworkerGlobalScope/setInterval

/* setInterval(()=>{code}, delay-in-miliseconds) -> Hace que se ejecute la función cada delay milisegundos. Si lo referenciamos mediante una variable/constante podemos pararlo con clearInterval(referencia) */

const saludar = () => {
    console.log('Hola')
}

let cont = 0

const interval = setInterval(() =>{
    console.log(cont)
    cont++
}, 1000)



