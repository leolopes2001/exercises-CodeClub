let number1 = 10

if (number1 % 2 === 0) {
    console.log(`This number is even`)
    if (number1 % 5 === 0) {
        console.log(`This number is divisible by 5`)
    }
} else if (number1 % 2 === 1) {
    console.log(`This number is odd`)
    if (number1 % 5 === 0) {
        console.log(`This number is divisible by 5`)
    }
}
let primeNumber = prime(number1)


function prime(number1){
    let cont = 0
    for(let i = 1;i <= number1;i++){
     if(number1%i===0){
         cont++
     }
    }
    if(cont===2){
        console.log(`The number ${number1} is a prime number!`)
    }else{
        console.log(`The number ${number1} is not a prime number!`)
    }
}