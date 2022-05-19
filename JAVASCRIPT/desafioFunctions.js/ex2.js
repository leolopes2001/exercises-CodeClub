



const TimesTables = number => {
    if(number > 10 || number < 1){
        return console.log("INVALID NUMBER")
    } else {
        for(let i = 1;i <= 10;i++){
            let result = i * number
            console.log(`${i} * ${number} = ${result}`)
        }
    }
}
const number = 10
TimesTables(number)