const companies = [
    { name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938 },
    { name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', foundedOn: 1975 },
    { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968 },
    { name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundedOn: 2004 },
    { name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006 },
    { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976 },
];

const newMarketValue = companies.map( company =>{
    function add10(value){
        let x = value / 10
        value = value + x
        return value
    }
    const newoOBJ = {
                name: company.name,
                marketValue: add10(company.marketValue),
                CEO: company.CEO,
                foundedOn: company.foundedOn
    }
    return newoOBJ
})

const newListCompanies = newMarketValue.filter(company=>{
    return company.foundedOn <= 2000
})
r
const sumCompanies = newListCompanies.reduce((acc,company)=>{
    return acc + company.marketValue
},0)

console.log(`-------------`)
console.log(`O valor total é ${sumCompanies}`)