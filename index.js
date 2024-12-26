class Person {
    #name; // Private field
    constructor(name, age) {
        this.#name = name;
        this.age = age;
    }
    getName() {
        return this.#name;
    }
}






//   const person = new Person('Alice', 25);
//   console.log(person.getName()); // Alice
// console.log(person);



class Studunt {
    #age;
    constructor(name, age) {
        this.#age = age
        this.name = name;
    }

    getstudent(){
        console.log(this.name,this.#age);
        
    }
}


