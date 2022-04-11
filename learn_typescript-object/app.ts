// Learn Object

// 1. ประกาศ Object ชื่อ student โดยมี property อะไรก็ได้ 5 ชนิด (boolean, number, string,  object)

type Student = {
    firstName: string;
    lastName: string;
    age: number;
    isActive: boolean;
    hobbies: string[];
}

let student1: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    isActive: true,
    hobbies: ['Sports', 'Cooking']
}

// 2. จากนั้น ทำการ Clone Object โดยใช้ Assign ออกมาเป็น student2

let student2: Student = Object.assign({}, student1);
student2.isActive = null;

// 3. ทำการวน loop ให้ print key และ value ของ student2 ออกมา

for (let key in student2) {
    console.log(`${key}: ${student2[key]}`);
}

// 4. ทำการเพิ่ม property ของ student2 เป็น property ชื่อว่า isActive โดยมีค่าเป็น true
student2.isActive = true;
console.log(student2);

// 5. ทำการลบ property isActive ทิ้งซะ

delete student2.isActive;
console.log(student2);