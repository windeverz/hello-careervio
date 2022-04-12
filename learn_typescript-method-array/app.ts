// Learn Method Array
// 1. กำหนด String ที่ประกอบไปด้วย "Apple, Cat, Zoo, Bird, Dog" ให้นำ String ที่ประกอบไปด้วยคำ 5 คำแยกออกมาแล้วเก็บลงใน array ที่ชื่อว่า input โดยเรียงลำดับตามตัวอักษร
let originalString = "Apple,Cat,Zoo,Bird,Dog";
let strToArray = originalString.split(",").sort();
console.log(strToArray);

// 2. มี Array ที่ประกอบไปด้วย [123,132,423,423,12345,5343,52,10904,64] จงแสดงค่าออกมาจาก Array ออกมา โดยนที่ค่านำต้องขึ้นต้นด้วยเลข 1 เท่านั้น
let numberArray = [123,132,423,423,12345,5343,52,10904,64];
let filterOne = numberArray.filter(item => item.toString().startsWith("1"));
console.log(filterOne);

// 3. ["Apple", "Mango", "Cat", "Banana"] มี 1 element ที่ไม่เข้าพวก จงใช้วิธีการ splice และแทนที่ค่านั้นด้วยคำว่า "Orange" หลังจากนั้นให้ sort element ตามลำดับ Alphabet
let friuts = ["Apple", "Mango", "Cat", "Banana"];
friuts.splice(2, 1, "Orange");
friuts.sort();
console.log(friuts);

let age = [14,16,18,21,26,30,35];
// 4. ลองใช้ Map
let mapAge = age.map(item => `${item} years old\n`);
console.log(`use map: ${mapAge}`);

// 5. ลองใช้ Filter
let filterAge = age.filter(item => item >= 18);
console.log(`use filter: ${filterAge}`);

// 6. ลองใช้ Find
let findAge = age.find(item => item >= 18);
console.log(`use find: ${findAge}`);

// 7. ลองใช้ forEach
let forEachAge = age.forEach(item => console.log(item));
