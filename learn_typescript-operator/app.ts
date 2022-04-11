// Learn Operator

// 1. จงแปลงค่าของ String "230" ให้เป็น number แล้ว print ออกมา
let oldStr:string = "230";
let strToNum:number = Number(oldStr);
console.log(strToNum);

// 2. จงแปลงค่าของ Number 230 ให้เป็น String แล้ว print ออกมา 
let oldNumber:number = 230;
let numToStr:string = String(oldNumber);
console.log(numToStr);

// 3. จงเขียน code เพื่อหา 3 ยกกำลัง 4 แล้ว print ออกมาก
let num1 = Math.pow(3, 4);
console.log(num1);

// 4. จงเขียน code เพื่อให้ ค่า x เท่ากับ 6 แล้วนำ x มาคูณ 20 โดยใช้ "การดำเนินการแบบย่อ"
let x:number = 6
x *= 20;
console.log(`x is ${x}`);
