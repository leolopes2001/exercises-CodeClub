const numbers = [1,2,3,4]

const students = [
    { name: "Rodolfo", age: 25 },
    { name: "Maria", age: 43 },
    { name: "João", age: 21 },
    { name: "Bruno", age: 43 },
    { name: "Carla", age: 13 },
    { name: "Ana", age: 20 },
    { name: "Julio", age: 26 },
];


// const newArray = numbers.map( (number) =>{
//    const newNumber = number + 10 * 2 / 3
//    return newNumber 
// })

const newStudents = students.map( (student) =>{
    const newStudent = {
        name: student.name + ' Martins',
        age: student.age + 10
    }
    return newStudent
})

console.log(newStudents)
console.log(students)