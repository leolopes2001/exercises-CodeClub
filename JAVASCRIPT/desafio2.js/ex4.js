const number1 = 44
const number2 = 20
const number3 = 30

let allNumbers = []

allNumbers.push(number1)
allNumbers.push(number2)
allNumbers.push(number3)

let higher = higherNumber()
let smaller = smallerNumber()

console.log(`The highest number is ${higher}!`)
console.log(`The smallest number is ${smaller}!`)

function smallerNumber(){
    let smaller = allNumbers[0]
    for(let i = 1;i < allNumbers.length;i++){
        if(allNumbers[i] < smaller){
            smaller = allNumbers[i]
        }
    }
    return smaller
}

function higherNumber(){
    let higher = allNumbers[0]
    for(let i = 1;i <= allNumbers.length;i++){
        if(allNumbers[i] > higher){
            higher = allNumbers[i]
        }
    }
    return higher
}