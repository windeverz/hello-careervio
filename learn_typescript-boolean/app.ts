// โจทย์ Boolean

let a:boolean = false;
let b:boolean = true;
let c:boolean = false;

// 1. (A||(B&&C))
console.log(`(A || (B && C)) is ${a || (b && c)}`); // false

// 2. (B||(A||C))
console.log(`(B || (A || C)) is ${b || (a || c)}`); // true

// 3. (B&&(A||C))
console.log(`(B && (A || C)) is ${b && (a || c)}`); // true