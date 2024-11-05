/*Una promesa: es un objeto que dentro tiene dos callbacks internos*/

const users = [{id:1, name: 'Nathy'}, {id:2, name:'Jose'}, {id:3, name:'Omar'}]

const emails = [{id:1, email:'nathyyanieris2013@gmail.com'}, {id:2, email:'jicg@gmail.com'}]

const getUser = (id) => {
    const user = users.find(user => user.id == id)
    return promise = new Promise((resolve, reject) => {
        if (!user) reject(`Doesn´t exist an user with id ${id}`)
        else resolve(user)
    })
}

const getEmail = (user) => {  
    const email = emails.find(email => email.id == user.id)
    return promise = new Promise((resolve, reject) => {
        if (!email) reject(`${user.name} hasn´t email`)
        else resolve({
            id: user.id,
            name:user.name,
            email: email.email
        })
    })
}

//getUser(2)
    //.then(user => getEmail(user))/*Métoto .then -> resuelve el contenido de la promesa*/
    //.then(res => console.log(res))
    //.catch(err => console.log(err))/*Método .catch para menjar los errores */

getUser(2)
    .then(getEmail)
    .then(console.log)
    .catch(console.log)