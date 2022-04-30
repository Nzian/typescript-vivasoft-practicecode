"use strict";
// Basic class definition
class Greeter {
    constructor(message) {
        this.greeting = message;
    }
    greet() {
        return 'Hello, ' + this.greeting;
    }
}
let greeter = new Greeter('world');
console.log(greeter.greet());
// inheritance example of class
class Animal {
    move(distanceInMeters = 0) {
        console.log(`Animal moved ${distanceInMeters}m.`);
    }
}
class Dog extends Animal {
    bark() {
        console.log('Woof! Woof!');
    }
}
class Cat extends Animal {
    meu() {
        console.log('meu! meu!');
    }
}
const dog = new Dog();
dog.bark(); // print: Woof! Woof!
dog.move(10); // print: Animal moved 10m.
dog.bark(); // print: Woof! Woof!
const cat = new Cat();
cat.meu(); // print: meu! meu!
cat.move(20);
cat.meu();
class Sonar {
    ping() {
        console.log('ping!');
    }
}
class Ball {
    //Class 'Ball' incorrectly implements interface 'Pingable'.
    // Property 'ping' is missing in type 'Ball' but required in type 'Pingable'.
    pong() {
        console.log('pong!');
    }
    // to fix the issue we need to declare a function named ping
    ping() {
        console.log('ping!');
    }
}
//# sourceMappingURL=class.js.map