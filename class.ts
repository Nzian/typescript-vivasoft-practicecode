// Basic class definition
class Greeter {
   greeting: string;
   constructor(message: string) {
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
   move(distanceInMeters: number = 0) {
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

// interface example 

interface Pingable {
   ping(): void;
}

class Sonar implements Pingable {
   ping() {
      console.log('ping!');
   }
}

class Ball implements Pingable {
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
