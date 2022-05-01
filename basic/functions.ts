function Greeting(message: string): void {
	console.dir(message);
}

Greeting('Hello Typescript');

// function buildName(firstName: string, lastName: string): string {}

function buildName(firstName: string, lastName: string): string {
	return firstName + ' ' + lastName;
}

//let result1 = buildName('type'); // errors too few paramiters

//let result2 = buildName('type', 'script', 'utko'); //errors too many paramiters

let result3 = buildName('Type', 'Script'); // just wright. output Type Script

console.dir(result3);

// optional paramiter in function

function buildNameOptional(firstName: string, lastName?: string) {
   if (lastName) return firstName + ' ' + lastName;
   else return firstName;
}

let resulto1 = buildNameOptional('Bob'); // works correctly now
//let resulto2 = buildNameOptional('Bob', 'Adams', 'Sr.'); // error, too many parameters
//Expected 1-2 arguments, but got 3.
let resulto3 = buildNameOptional('Bob', 'Adams'); // ah, just right
console.dir(resulto3);

// default value example

function buildNameDefault(firstName: string, lastName = 'Smith') {
   return firstName + ' ' + lastName;
}

let resultd1 = buildNameDefault('Bob'); // works correctly now, returns "Bob Smith"
let resultd2 = buildNameDefault('Bob', undefined); // still works, also returns "Bob Smith"
//let resultd3 = buildNameDefault('Bob', 'Adams', 'Sr.'); // error, too many parameters
//Expected 1-2 arguments, but got 3.
let resultd4 = buildNameDefault('Bob', 'Adams'); // ah, just right


// example of rest paramiters. We understood firstName must be but we dont know how many part rest of the name. 
// for example Abu sadat mohammed sayem. Mohammed Muslah Uddin, Md. Abul Hasan and so on

function buildNameRest(firstName: string, ...restOfName: string[]) {
   return firstName + ' ' + restOfName.join(' ');
}

// employeeName will be "Joseph Samuel Lucas MacKinzie"
let employeeName = buildNameRest('Joseph', 'Samuel', 'Lucas', 'MacKinzie');
console.log(employeeName);

let friendName = buildNameRest('Abu', 'sadat', 'mohammed', 'sayem');
console.log(friendName);

// paramiter destructurig

function sum({a, b, c}: {a : number, b: number, c: number}) {
	console.log(a + b + c);
}

sum({a: 10, b: 34, c: 40});

type ABC = {a: number, b: number, c:number};

// sum function with factored type

function sumType({a, b, c}: ABC) {
	console.log(a+ b + c);
}

sumType({a:23, b: 22, c:21});
