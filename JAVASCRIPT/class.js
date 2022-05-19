class Person {
    constructor(name, age) {
        console.log(`Heloo ${name}`)

        this.name = name
        this.age = age
    }

    talk() {
        console.log(`Hello, my name is ${this.name} and I'm ${this.age}`)
    }
}

const newPerson = new Person("Leo",20)

newPerson.talk()
