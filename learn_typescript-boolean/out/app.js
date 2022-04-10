// โจทย์ Boolean
var a = false;
var b = true;
var c = false;
// 1. (A||(B&&C))
console.log("(A || (B && C)) is ".concat(a || (b && c))); // false
// 2. (B||(A||C))
console.log("(B || (A || C)) is ".concat(b || (a || c))); // true
// 3. (B&&(A||C))
console.log("(B && (A || C)) is ".concat(b && (a || c))); // true
//# sourceMappingURL=app.js.map