

// Method Overloading: JavaScript does not support method overloading directly. You can achieve it by using optional parameters or checking the argument types.

function greet(name, age) {
    if (age) {
        console.log(`Hello ${name}, you are ${age} years old.`);
    } else {
        console.log(`Hello ${name}.`);
    }
}

// Method Overriding: Achieved when a child class defines a method with the same name as one in its parent class.

class Animal {
    speak() {
        console.log("Animal speaks");
    }
}

class Dog extends Animal {
    speak() {
        console.log("Dog barks");
    }
}

const dog = new Dog();
dog.speak(); // Output: Dog barks