// Learn Classes
// 1. เขียน Code ตาม Video ให้เป็น Class และ Interface ออกมาให้ครบถ้วน

// 2. ให้เพิ่ม code ใน Function ต่างๆ เช่น work() หรือ sleep() เมื่อ Class ทำการ Implement function นั้นๆ ให้เขียน Code console.log() ใส่เข้าไป ให้รู้ว่าทำงานที่ไหน เช่น ถ้าเป็น work() ของ Programmer ให้ มี code console.log("Programmer Work")

// 3. ให้ทดสอบ code ของ Programmer work() และ CTO work()

interface Workable {
    work(): void;
}

class Programmer implements Workable {
    private firstName: string;
    private lastName: string;
    private position: string;
    constructor(firstName: string, lastName: string, position: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.position = position;
    }
    work(){
        console.log(`Programmer name: ${this.firstName} ${this.lastName} at Position: ${this.position} still Working 👨‍💻`);
    }
}

class CTO implements Workable {
    private name: string;
    constructor(name: string) {
        this.name = name;
    }
    work() {
        console.log(`CTO ${this.name} still Working 💁‍♂️`);
    }
}

let john = new Programmer("John", "Doe", "Frontend Developer");
john.work();

let boss = new CTO("Boss Baby");
boss.work();