
const monthly_interest_rate = (initial_value,current_value_of_investiment,months) => {
     return ((current_value_of_investiment - initial_value) / (initial_value * months)) * 100
}

const interesr_rate = monthly_interest_rate(1000,1200,10)
console.log(`The monthly rate is ${interesr_rate}% per month!`)