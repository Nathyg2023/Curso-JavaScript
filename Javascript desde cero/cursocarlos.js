const posts = [{
    id: 1,
    title: "Mi primer post",
    image: "htps://img.com/1",
    tags: ["javascript","webdevelopment"]

},{
    id: 2,
    title: "Mi experiencia con React",
    image: "htps://img.com/3",
    tags: ["javascript","webdevelopment","angular"]
},{
    id: 3,
    title: "Por deje Angular",
    image: "htps://img.com/2",
    tags: ["javascript","webdevelopment","react"]
}]
//Método find:
const result1 = posts.find(post => post.id == 1)
console.log(result1)

const result2 = posts.find(post => post.title == "Por deje Angular")
console.log(result2)

//Método sone: me devuelve true o false si existe lo que le pedimos
const result3 = posts.some(post => post.id == 4)
console.log(result3)

//Método every: comprueba si se cumplen todas las condiciones
const result4 = posts.every(post =>post.tags.includes("react"))
console.log(result4)

//Método map: me devuleve un nuevo array mutando lo que estoy solicitandole
const result5 = posts.map(post => post.title)
console.log(result5)

//Método Filter: me devuelve un nuevo array con los elementos que cumplan la condición
const result6 = posts.filter(post=> post.tags.includes("angular"))
console.log(result6)