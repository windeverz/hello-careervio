// Number โจทย์ 1
// 1. แปลงให้อยู่ในรูป e
let a1:number = 1e6;
let a2:number = 1e7;
let a3:number = 43e9;
let a4:number = 12e-6;
let a5:number = 1.234e-7;

// 2. แปลงให้อยู่ในรูปปกติ

let b1:number = 10000000000;
let b2:number = 200000;
let b3:number = 12200000000;
let b4:number = 0.00000001;
let b5:number = 0.00012;

// Number โจทย์ 2
// ตัวอย่าง
let numRouding = 1.23456;
let resultNumRouding = Math.floor(numRouding * 100) / 100; // 1.23

let number100:number = 100;
let number111:number = 111; 
let number55:number = 55;
let number21:number = 21;
let number99:number = 99;

// 1. ประกาศเลขให้อยู่ในรูปเลขฐาน 8

console.log(number100.toString(8));
console.log(number111.toString(8));
console.log(number55.toString(8));
console.log(number21.toString(8));
console.log(number99.toString(8));

// 2. ประกาศเลขให้อยู่ในรูปเลขฐาน 16

console.log(number100.toString(16));
console.log(number111.toString(16));
console.log(number55.toString(16));
console.log(number21.toString(16));
console.log(number99.toString(16));

// 3. ใช้ function Math.round

let roundOne:number = 12.345;
let roundTwo:number = 31313.135;
let roundThree:number = 42.809;

console.log(`12.345 is ${Math.round(roundOne)}`);
console.log(`31313.135 is ${Math.round(roundTwo)}`);
console.log(`42.809 is ${Math.round(roundThree)}`);


// Number โจทย์ 3 
// เขียน function Random

function Random(min:number, max:number):number {
    let someRandom = (Math.random() * max) * min;
    return someRandom;
}

console.log(`function Random: ${Random(1, 10)}`);