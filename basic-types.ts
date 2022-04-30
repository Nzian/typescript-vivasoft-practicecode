// premitive data types
let isDone: boolean;
isDone = true;
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
//let big: bigint = BigInt(10000); BigInt or 100n working only in es2020 target
//console.log(big);
console.log(octal);
console.log(isDone);

let color: string = "blue";
let fullname: string = "ziauddin";
let age: number = 35;
let sentence: string = `Hello my name is ${fullname} and I ware a ${color} shirt. My age will be ${age + 1} next month`;
console.log(sentence);

// array
let list: number[] = [1,2,4];
let genericList: Array<number> = [1,2,32, 3,32];

console.dir(genericList);

// tupples
let x: [number, string, boolean][];

x = [[10, 'Robin', true], [20, 'hasan', false]];

let y: [number, string];
y = [5,'january'];
y[0] = 10;

let z:readonly[string,number] = ['february', 10];
//z[0] = 'March';
console.dir(y);
console.dir(z);
console.log(x);

// enum

enum Color {
    Red = 1,
    Green = 3,
    Blue = 4,
}

let c: Color = Color.Green
let cname: string = Color[4]

console.dir(Color);

console.log(c)
console.log(cname)

// unknown and any

let notsure: unknown = 4
notsure = "hello my name"
notsure = false

console.log(notsure)

// if you declare unknown as constant then you cant assign it within a different type of variable

let maybe: any;

maybe = 2;

console.dir(maybe)

let minnum: number;

if(typeof maybe === 'number') {
    minnum = maybe;
    console.log(minnum);
}

//const aNumber: number = maybe
