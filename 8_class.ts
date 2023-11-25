// class

// class Person{
    // name: string;
    // age: number;
    // nic: string;
// 
    // constructor(name: string, age: number, nic: string){
        // this.name=name;
        // this.age=age;
        // this.nic=nic;
    // }
// }
// 
// let Person1 = new Person('kavindu',28,'200167202516');
// console.log(Person);
// 
// 
// 


// class

class Person{
    private name: string;
    private  age: number;
    private nic: string;
 
     constructor(name: string, age: number, nic: string){
         this.name=name;
         this.age=age;
         this.nic=nic;
     }
 
     getNic(){
         return this.nic;
     }
 }
 
 
 let person1 = new Person('kavindu',28,'200167202516');
 console.log(Person);
 //console.log(Person1.nic); // cannot access nic directly becuase nic is a private attribute
 console.log(person1.getNic());
 
 