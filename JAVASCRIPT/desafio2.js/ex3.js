const randomNumber = Math.round((Math.random() * (10 - 1) + 1))
const number = Math.round((Math.random() * (10 - 1) + 1))
console.log(`Your number is ${number}`)

console.log(`The number drawn was ${randomNumber}`)
if(randomNumber === number){
    console.log(`Congratulation, You won!`)
}else if(randomNumber != number){
    console.log(`Good Luck next time !`)
}