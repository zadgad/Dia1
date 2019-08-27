let user ={name: "steve", age:22};
let details= {place:"Romania",hobby:"reading"};
// unir los dos objetos
let person={...user, ...details};
console.log(person);
