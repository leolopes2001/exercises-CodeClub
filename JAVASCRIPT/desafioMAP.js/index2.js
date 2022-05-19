const students = [
    {name: "Rodolfo", testGrade: 7},
    {name: "Maria", testGrade: 5},
    {name: "João", testGrade: 8},
    {name: "Bruno", testGrade: 9},
    {name: "Carla", testGrade: 3},
    {name: "Ana", testGrade: 2},
    {name: "Julio", testGrade: 10},
];
const newList = students.map( (student) => {
    let newStudent = []
    if(student.testGrade >= 7){
        newStudent = {
            name: student.name,
            finalResult: "approved"
        }
    }else if(student.testGrade <= 6){
        newStudent = {
            name: student.name,
            finalResult: "disapproved"
        }
    }
    return newStudent
})
console.log(newList)