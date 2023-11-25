// class
var Person = /** @class */ (function () {
    function Person(name, age, nic) {
        this.name = name;
        this.age = age;
        this.nic = nic;
    }
    Person.prototype.getNic = function () {
        return this.nic;
    };
    return Person;
}());
var person1 = new Person('kavindu', 28, '200167202516');
console.log(Person);
//console.log(Person1.nic); // cannot access nic directly becuase nic is a private attribute
console.log(person1.getNic());
