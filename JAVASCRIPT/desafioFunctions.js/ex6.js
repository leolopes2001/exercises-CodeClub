
const salaray_administration = population => {

    let sum_of_all_wages = 0;
    let number_of_children = 0;
    let highest_salary = 0;

    for(let everything of population){
        sum_of_all_wages += (everything.salary)
        number_of_children += (everything.sons)

        if(everything.salary < 0){
            console.log('There is a negative salary!')
            break
        }

        if(highest_salary < (everything.salary)){
            highest_salary = everything.salary
        }
    }
    let avarage_salary = sum_of_all_wages / (population.length)
    let average_of_sons = number_of_children / (population.length)
    
    console.log(avarage_salary)
    console.log(average_of_sons)
    console.log(highest_salary)

}









const population = [
    {
        salary: 1000,
        sons: 4
    },
    {
        salary: 5000,
        sons: 3
    },
    {
        salary: 3000,
        sons: 1
    },
    {
        salary: 4500,
        sons: 2
    },
    {
        salary: 7000,
        sons: 3
    }
]


salaray_administration(population)