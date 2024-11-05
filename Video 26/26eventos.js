const button = document.getElementById('button')
const input = document.getElementById('input')
const box = document.getElementById('box')

/*
Eventos de ratón:
click -> Cuando pulsamos el botón izquierdo del ratón*/
/* button.addEventListener('click', () => {
    console.log('CLICK');
}) */


/*dblclick -> cuando pulsamos dos veces seguidos el botón izquierdo del ratón*/
/* button.addEventListener('dblclick', () => {
    console.log('DOBLE CLICK')
}) */

/*mouseenter -> cuando entramos en la zona que tiene el evento*/
/* box.addEventListener('mouseenter', () => {
    box.classList.replace('red', 'green')
}) */
 
/*mouseleave -> Salir de la zona*/
/* box.addEventListener('mouseleave', () => {
    box.classList.replace('green', 'red')
})  */

/*mousedown -> cuando pulsamos y no soltamos el boton izquierdo del ratón*/
/* box.addEventListener('mousedown', () =>{
    console.log('HAS PULSADO EN LA CAJA')
})
 */
/*mouseup -> cuando soltamos el boton izquierdo del ratón*/
/* box.addEventListener('mouseup', () =>{
    console.log('HAS SOLTADO EL BOTÓN IZQUIERDO EN LA CAJA')
}) */

/*mousemove -> cuando movemos el ratón*/
/* box.addEventListener('mousemove', () => {
    console.log('ESTAS MOVIENDO EL RATON EN LA CAJA');
}) */


/*Eventos del teclado:*/

/*keydown -> cuando pulsamos una tecla*/
input.addEventListener('keydown', () => {
    console.log('HAS PULSADO UNA TECLA')
})

/*keyup -> cuando soltamos una tecla*/
input.addEventListener('keyup', () => {
    console.log('HAS SOLTADO UNA TECLA')
})

/*keypress -> Cuando pulsamos una tecla y no la soltamos */
input.addEventListener('keypress', () => {
    console.log('ESTÁS PULSANDO UNA TECLA')
})




