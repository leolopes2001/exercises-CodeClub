



const calculator = (number1, number2, operation) => {
    switch (operation) {
        case "+": return number1 + number2;
            
        case "-": return number1 - number2;
            
        case "*": return number1 * number2;

        case "/": return number1 / number2;

        default: return "INVALID OPERATITON";
    }
}
let operation = 5
let number1 = 10
let number2 = 5

let result = calculator(number1,number2,operation)
console.log(result)