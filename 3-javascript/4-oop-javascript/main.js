//oop stands for object oriented programming

//every thing is object in javascript

// object literal
const AzanKhan = {
    name : "Hafiz Azan",
    age : 16
}
console.log(AzanKhan);

function PersonOne(){
    this.name = "Hafiz Azan",
    this.age = 16,
    this.birthday = "2007-01-26"
} 
const Person = new PersonOne();
console.log(Person)
//constructor functions


function PersonTwo(name,age,birthday) {
    this.name = name,
    this.age = age,
    this.birthday = birthday

    this.calculateAge = function(){
        const Defrence = Date.now() - this.birthday.gettime();
        const Age = new Date(Defrence); 
        // + ko absolute kahaingay oop mai
        return Math.abs(Age.getUTCFullYear() - 2007)
    }
}

const Variable = new PersonTwo("Hafiz Azan",16,"2007-01-26");
console.log(Variable)


class PersonClass {
    constructor(name, age) {
      this.name = name;
      this.age = age; //class properties
    }
  
    hello() {
      //class methods
      return "hello";
    }
  
    checkName() {
      return this.name;
    }
  }
  
  const personClass = new PersonClass("Muzammil Mustaqeem", 27); //initialize
  const hello = personClass.hello();
  const checkName = personClass.checkName();
  
  console.log({ personClass, hello, checkName });


  class personFour {
    static GenericWork(){
        return "hello Freind!"
    }
  }
const work = personFour.GenericWork()
console.log(work)