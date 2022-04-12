// Learn Classes
// 1. เขียน Code ตาม Video ให้เป็น Class และ Interface ออกมาให้ครบถ้วน
var Programmer = /** @class */ (function () {
    function Programmer(firstName, lastName, position) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.position = position;
    }
    Programmer.prototype.work = function () {
        console.log("Programmer name: ".concat(this.firstName, " ").concat(this.lastName, " at Position: ").concat(this.position, " still Working \uD83D\uDC68\u200D\uD83D\uDCBB"));
    };
    return Programmer;
}());
var CTO = /** @class */ (function () {
    function CTO(name) {
        this.name = name;
    }
    CTO.prototype.work = function () {
        console.log("CTO ".concat(this.name, " still Working \uD83D\uDC81\u200D\u2642\uFE0F"));
    };
    return CTO;
}());
var john = new Programmer("John", "Doe", "Frontend Developer");
john.work();
var boss = new CTO("Boss Baby");
boss.work();
//# sourceMappingURL=app.js.map