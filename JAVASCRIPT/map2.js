const numbers = [20,30,10,5]

const students = [
    { name: "Rodolfo", age: 25 },
    { name: "Maria", age: 43 },
    { name: "João", age: 21 },
    { name: "Bruno", age: 43 },
    { name: "Carla", age: 13 },
    { name: "Ana", age: 20 },
    { name: "Julio", age: 26 },
];

const double = number => number * 2
const toReais = number => `R$ ${number.toFixed(2)}`


const newArray = numbers.map(double).map(toReais)

console.log(newArray)