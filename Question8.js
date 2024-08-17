// this: Refers to the object from which it was called.

const obj = {
    name: "Nabeel",
    greet: function() {
        console.log(this.name);
    }
};
obj.greet(); // Output: Nabeel

// new: Used to create an instance of an object or function.

function Person(name) {
    this.name = name;
}
const person = new Person("Nabeel");
console.log(person.name); // Output: Nabeel