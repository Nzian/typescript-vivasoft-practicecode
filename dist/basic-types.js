"use strict";
// premitive data types
let isDone;
isDone = true;
let decimal = 6;
let hex = 0xf00d;
let binary = 0b1010;
let octal = 0o744;
//let big: bigint = BigInt(10000); BigInt or 100n working only in es2020 target
//console.log(big);
console.log(octal);
console.log(isDone);
let color = "blue";
let fullname = "ziauddin";
let age = 35;
let sentence = `Hello my name is ${fullname} and I ware a ${color} shirt. My age will be ${age + 1} next month`;
console.log(sentence);
// array
let list = [1, 2, 4];
let genericList = [1, 2, 32, 3, 32];
console.dir(genericList);
// tupples
let x;
x = [[10, 'Robin', true], [20, 'hasan', false]];
let y;
y = [5, 'january'];
y[0] = 10;
let z = ['february', 10];
//z[0] = 'March';
console.dir(y);
console.dir(z);
console.log(x);
// enum
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 3] = "Green";
    Color[Color["Blue"] = 4] = "Blue";
})(Color || (Color = {}));
let c = Color.Green;
let cname = Color[4];
console.dir(Color);
console.log(c);
console.log(cname);
// unknown and any
let notsure = 4;
notsure = "hello my name";
notsure = false;
console.log(notsure);
// if you declare unknown as constant then you cant assign it within a different type of variable
let maybe;
maybe = 2;
console.dir(maybe);
let minnum;
if (typeof maybe === 'number') {
    minnum = maybe;
    console.log(minnum);
}
//const aNumber: number = maybe
//# sourceMappingURL=basic-types.js.map