// declare interface. its the definition of class which implement this.
// interface only declaration not implement anything. 
interface IPerson { 
    firstName: string, 
    lastName: string, 
    sayHi: () => string 
} 
// create an object of Iperson customer
const customer: IPerson = { 
    firstName: "Tom",
    lastName: "Hanks", 
    sayHi: () => "Hi there" 
} 

console.log("Customer Object ") 
console.log(customer.firstName) 
console.log(customer.lastName) 
console.log(customer.sayHi())  
// create an object of Iperson type iemployee
const iemployee: IPerson = { 
    firstName: "Jim",
    lastName: "Blakes", 
    sayHi: () => "Hello!!!" 
} 

console.log("Employee Object") 
console.log(iemployee.firstName);
console.log(iemployee.lastName);

// interface inheritance 
// in typescript one interface can be inherited from multiple interface
interface Musician extends IPerson {
    instrument: string
}

interface Vehicle {
    name: string,
    type: string,
    wheel: number,
    helper: () => void
}

interface Driver extends IPerson, Vehicle {
    route: string,
    experience: number
}

const driver = <Driver>{};
driver.helper = () => {
    console.log(driver.type);
};
console.dir(driver);
driver.firstName = 'David';
driver.experience = 10;
driver.lastName = 'Hamid';
driver.route = 'mirpur to jatrabari';

console.dir(driver);

// you can define an interface with another one.
interface MusicianCategory {
    musicianType: string,
    musician: Musician 
}

const drummer = <Musician>{};

drummer.firstName = 'Kevin';
drummer.lastName = 'Marun';
drummer.instrument = 'drum';
drummer.sayHi = () => "Hello! typescript";

console.dir(drummer.sayHi());


const fokMusician = <MusicianCategory>{};
fokMusician.musicianType = 'Fok';
fokMusician.musician = drummer;

console.dir(fokMusician);

