// class

class Person{
    name: string;
    age: number;
    nic: string;

    constructor(name: string, age: number, nic: string){
        this.name=name;
        this.age=age;
        this.nic=nic;
    }
}

let Person1 = new Person('kavindu',28,'200167202516');
console.log(Person);

Person.name = "SACHINI";
console.log(Person1);