const users=[
{id:11, nombre: 'Adam', edad: 23, grupo:'editor'},{id:47, nombre:'Jhon', edad:28, grupo:'admin'},
{id:85, nombre:'Willian', edad:34, grupo:'editor'},{id:91, Nombre:'Oliver', edad:28, grupo:'admin'}
];
//elementos con la letra 'ohn' en el nombre
const filtered = users.filter(function(element){
    return element.nombre == 'ohn';
});
console.log(filtered);

// const euros = [29,76,41,85,46,5];

const zad = [29,76,41,85,46,5];
const euros = [29,76,41,85,46,5].reduce(function(a,b,c,d,f,g){
    return a+b;
});
console.log(euros);

const resul= euros/zad.length;

console.log(resul);