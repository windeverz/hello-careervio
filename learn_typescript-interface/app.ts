// Learn Interface
// 1. ทดลองสร้าง interface file ที่ประกอบไปด้วยข้อมูลในบัตรประชาชน
interface nationalCard {
    identification: number;
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    dateOfIssue: string;
    dateOfExpiry: string;
    address: string;
}

let someBody: nationalCard = {
    identification: 123456789,
    firstName: "ประสงค์",
    lastName: "ยุทธภพ",
    dateOfBirth: "01/01/1990",
    dateOfIssue: "01/01/2020",
    dateOfExpiry: "01/01/2030",
    address: "123/4 ถนนสุขุมวิท แขวงสุขุมวิท เขตสุขุมวิท กรุงเทพมหานคร 10900"
}

console.log(someBody)

// 2. ทดลองสร้าง Interface file ที่เรียกใช้งานซ้อนกัน โดยที่ interface file แรกประกอบไปด้วยข้อมูลชื่อวิชา เช่น ภาษาอังกฤษ ภาษาไทย คณิตศาสตร์ และ interface file ที่สองประกอบไปด้วยข้อมูลรายวิชา เช่น รหัสประวิชา หน่วยกิต
interface SubjectDetail{
    code: number;
    credit: number;
}

interface Subject {
    name: string;
    detail: SubjectDetail;
}

let englishProgram : Subject = {
    name: "English Program",
    detail: {
        code: 123,
        credit: 3
    }
}

console.log(englishProgram.detail);