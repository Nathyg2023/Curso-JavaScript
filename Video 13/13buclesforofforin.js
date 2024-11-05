/*bucles for of y for in*/

/* let names = ['Paco', 'Jose', 'Paula', 'Maria']

for(let name of names){
    console.log(name);
} */

/* let names = ['Paco', 'Jose', 'Paula', 'Maria']

for(let index in names){
    console.log(index);
} */

/* let names = ['Paco', 'Jose', 'Paula', 'Maria']

for(let i = 0; i<names.length;i++){
    if(names[i]==='Paula'){
        break  
    }
    console.log(names[i]);
} */

/* let names = ['Paco', 'Jose', 'Paula', 'Maria']

for(let i = 0; i<names.length;i++){
    if(names[i]==='Paula'){
        continue  
    }
    console.log(names[i]);
} */

let names = ['Paco', 'Jose', 'Paula', 'Maria']
 
for(let name of names){
    if(name==='Paula'){
        continue
    }
    console.log(name);  
}

for(let index in names){
    if(names[index]==='Paula'){
        continue
    }
    console.log(index);
}