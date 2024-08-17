// Function Constructor:

function Person(name) {
  this.name = name;
}
const person = new Person("Nabeel");
console.log(person.name); // Output: Nabeel

// Class Constructor:

class Person {
  constructor(name) {
    this.name = name;
  }
}
const person = new Person("Nabeel");
console.log(person.name); // Output: Nabeel
