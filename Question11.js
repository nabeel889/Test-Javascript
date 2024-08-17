// extends Keyword in JS
// Used to create a class that is a child of another class.

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
