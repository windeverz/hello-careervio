// Learn Arrow Function
// 1. ทดลองเขียน Arrow Function ในการรับค่า Input เพื่อคำนวณหา เพื่อนที่ของสี่เหลี่ยมผืนผ้า

let rectangle = (width: number, height: number) => {
    return width * height;
}

let someRaction  = rectangle(10, 20);
console.log(someRaction); // 200

// 2. ทดลองเขียน Arrow Function ในการรับค่า Input เพื่อคำนวณหา จำนวนเฉพาะ
let arrNumber = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let primeNumber = (number) => {
    let primeNum = [];
    for (let i = 0; i < number.length; i++) {
        if (number[i] % 2 !== 0) {
            primeNum.push(number[i]);
        }
    }
    return primeNum
}

console.log(primeNumber(arrNumber)); // [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]