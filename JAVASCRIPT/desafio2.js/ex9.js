let number1 = 7
let number2 = 8
let number3 = 1
let number4 = 3

if(number1%2 === 0 && number2%2 === 0 && number3%2 === 0 && number4%2 === 0){
    console.log(`The numbers ${number1},${number2},${number3} and ${number4} are even!`)
}else if(number1%2 === 1 && number2%2 === 1 && number3%2 === 1 && number4%2 === 1){
    console.log(`The numbers ${number1},${number2},${number3} and ${number4} are odd!`)
}else{
    console.log(`There are even and odd numbers!`)
}