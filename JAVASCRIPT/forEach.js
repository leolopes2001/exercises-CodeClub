const students = [
    { name: "Rodolfo", age: 25 },
    { name: "Maria", age: 43 },
    { name: "João", age: 21 },
    { name: "Bruno", age: 43 },
    { name: "Carla", age: 13 },
    { name: "Ana", age: 20 },
    { name: "Julio", age: 26 },
];


let allStudentsAge = 0;
students.forEach((banana, index, array) => {
    console.log(`O aluno ${banana.name} tem ${banana.age} anos e esta na posição ${index} do Array`)
    allStudentsAge += banana.age
})

const avarageAge = allStudentsAge / (students.length)
console.log(avarageAge.toFixed(0))