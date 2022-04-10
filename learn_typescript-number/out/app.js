// Number โจทย์ 1
// 1. แปลงให้อยู่ในรูป e
var a1 = 1e6;
var a2 = 1e7;
var a3 = 43e9;
var a4 = 12e-6;
var a5 = 1.234e-7;
// 2. แปลงให้อยู่ในรูปปกติ
var b1 = 10000000000;
var b2 = 200000;
var b3 = 12200000000;
var b4 = 0.00000001;
var b5 = 0.00012;
// Number โจทย์ 2
// ตัวอย่าง
var numRouding = 1.23456;
var resultNumRouding = Math.floor(numRouding * 100) / 100; // 1.23
var number100 = 100;
var number111 = 111;
var number55 = 55;
var number21 = 21;
var number99 = 99;
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
var roundOne = 12.345;
var roundTwo = 31313.135;
var roundThree = 42.809;
console.log("12.345 is ".concat(Math.round(roundOne)));
console.log("31313.135 is ".concat(Math.round(roundTwo)));
console.log("42.809 is ".concat(Math.round(roundThree)));
// Number โจทย์ 3 
// เขียน function Random
function Random(min, max) {
    var someRandom = (Math.random() * max) * min;
    return someRandom;
}
console.log("function Random: ".concat(Random(1, 10)));
//# sourceMappingURL=app.js.map