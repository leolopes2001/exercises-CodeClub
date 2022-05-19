



const comparator = (number1,number2) => {
    if(number1 > number2){
        return `The number ${number1} is greater than number ${number2}`
    } else if(number2 > number1){
        return `The number ${number2} is greater than number ${number1}`
    }
} 

let number1 = 15
let number2 = 100
let result = comparator(number1,number2)

console.log(result)
