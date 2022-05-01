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

// end inheritance

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

// end interface

// example of member visibility

// public

class GreeterPublic {
   public greet() {
      console.log('hi public method!');
   }
}

const gt = new GreeterPublic();
gt.greet();
// public end

// protected

class GreeterProtected {
   public greet() {
      console.log('Hello, ' + this.getName()); // getName is protected function only access by itself or subclass
   }

   protected getName() {
      return 'Typescript';
   }
}

class SpecialGreeter extends GreeterProtected {
   public howdy() {
      // OK to access protected member here
      console.log('Howdy, ' + this.getName()); // access by subclass
   }
}

const gp = new SpecialGreeter();

gp.greet(); // OK cause it public function
//gp.getName(); // Property 'getName' is protected and only accessible within class 'GreeterProtected' and its subclasses.

// private 

class Base {
   private x = 0;
   public increment() {
      this.x++;
      console.log(this.x);
   }
   public decrement() {
      this.x--;
      console.log(this.x);
   }
}
 const b = new Base(); // Can't access from outside the class
 //console.log(b.x); // Property 'x' is private and only accessible within class 'Base'.
 // but you can access x from public method increment or decrement

 b.increment(); // but you can change it from function method

class Derived extends Base {
   showX() {
     // Can't access in subclasses
      this.increment(); // this is okay you can update private value from public method or protected method by subclass
      this.decrement(); // this is also possible
     //console.log(this.x); // Property 'x' is private and only accessible within class 'Base'
   }
}

// Readonly modifier

class Octopus {
   readonly name: string;
   readonly numberOfLegs: number = 8;

   constructor(theName: string) {
      this.name = theName;
   }
}

// company

class Company {
   readonly name: string;
   readonly address: string;

   constructor(companyName: string, companyAddress: string) {
      this.name = companyName;
      this.address = companyAddress;
   }
}

let company = new Company('Viva Soft Ltd', 'Mirpur Dohs');

console.log(company.name); // ok
console.log(company.address); // ok

//company.name = 'xyz company'; // not okay
let dad = new Octopus('Man with the 8 strong legs'); // readonly property access only in constructor
//dad.name = 'Man with the 3-piece suit'; // Cannot assign to 'name' because it is a read-only property.

// accessor

// example of class without getter/setter

class Employee {
   public fullName: string = '';
}

let employee = new Employee();
employee.fullName = 'Bob Smith';

if (employee.fullName) {
   console.log(employee.fullName);
}
// without getter setter property need to be public
// now we can same example with getter and setter

const fullNameMaxLength = 10;

class EmployeeAccessor {
   private _fullName: string = "";

   get fullName(): string {
      return this._fullName;
   }

   set fullName(newName: string) {
      if (newName && newName.length > fullNameMaxLength) {
         throw new Error("fullName has a max length of " + fullNameMaxLength);
      }
      this._fullName = newName;
   }
}

// here we can update private property of a class by getter and setter class
let employeeAc = new EmployeeAccessor();
employeeAc.fullName = "Bob Smith";

if (employeeAc.fullName) {
   console.log(employeeAc.fullName);
}

// static member example

class MyClass {
   static x = 'Static property';
   
   static printX() { // static method
      console.log(MyClass.x);
   }
}

console.log(MyClass.x); // we dont need to create an object on MyClass. just access the property
MyClass.printX(); // just access the method


