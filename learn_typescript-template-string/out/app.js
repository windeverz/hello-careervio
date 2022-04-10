let text;
text = "Hello World";
console.log(text);
// Template String โจทย์ 1
// 1. define a variable
let str = "Everything can work";
// 2. find length of string
console.log(str.length);
// 3. use charAt() to find specific character
console.log(str.charAt(9));
// 4. use indexOf() to find specific character
console.log(str[9]);
// 5. two ways different to find specific character
console.log(str.charAt(30));
console.log(str[30]); // undefined
// 6. concat two strings
let firstWord = "Hello";
let secondWord = "World";
let concatWord = `${firstWord} ${secondWord}`;
console.log(concatWord);
// Template String โจทย์ 2
let excel = "microsoft excel";
let googleApple = "GOOGLE AND APPLE";
let sayHello = "hello world";
console.log(excel.toUpperCase());
console.log(googleApple.toLowerCase());
console.log(sayHello[0].toUpperCase() + sayHello.slice(1, 5), sayHello[6].toUpperCase() + sayHello.slice(7, 11));
// Template String โจทย์ 2 วีิดีโอที่ 2
let text2 = "Hello World";
console.log(text2.startsWith("Hello"));
console.log(text2.endsWith("World"));
let word1 = "Computer";
let word2 = "Death Race";
let word3 = "Republican";
console.log(word1.slice(3, 6));
console.log(word2.slice(0, 6));
console.log(word3.slice(2, 5));
//# sourceMappingURL=app.js.map