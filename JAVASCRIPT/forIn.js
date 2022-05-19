const student = {
    name: 'Leo',
    age: 20,
    genre: 'male',
}

for(let property in student){
    console.log(`${property} : ${student[property]}`)
}