const form = document.getElementById('form')
const input = document.getElementById('input')
const button = document.getElementById('button')

/* input.addEventListener('keyup', (e) => {
    console.log(e)
}) */

/*Target hace refencia al punto donde se origina el evento*/

/* input.addEventListener('click', (e) => {
    console.log(e.target)
})  */

//const gallery = document.getElementById('galery')

/* gallery.addEventListener('click', (e) => {
    e.target.classList.add('red');
}) */


/* button.addEventListener('click', (e) => {
    console.log(e.target);
}) */

/* const gallery = document.getElementById('gallery')

gallery.addEventListener('click', (e) => {
    e.target.classList.add('red');
}) */

const link = document.getElementById('link')

link.addEventListener('click', (e) => {
    e.preventDefault()
    button.click()
})

form.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log('El formulario se ha enviado');
})

button.addEventListener('click', () => {
    input.value = 'Has hecho click'
})