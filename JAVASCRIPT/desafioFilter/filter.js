/* const list = [20,3,234,12,17,541,6,87,275,1000]; // Apenas número pares e divisiveis por cinco

const newLsit = list.filter(number =>{
    return number%2===0 && number%5===0
})
console.log(newLsit) */


const companies = [
    { name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938 },
    { name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', foundedOn: 1975 },
    { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968 },
    { name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundedOn: 2004 },
    { name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006 },
    { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976 },
];

// fundadas depois de 1975 e que tenha mais de 200 dolares


const newList = companies.filter(company =>{
    return company.marketValue >= 200 && company.foundedOn >= 1975
})

console.log(newList)