var text;
text = "Hello World";
console.log(text);
// Template String โจทย์ 1
// 1. define a variable
var str = "Everything can work";
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
var firstWord = "Hello";
var secondWord = "World";
var concatWord = "".concat(firstWord, " ").concat(secondWord);
console.log(concatWord);
// Template String โจทย์ 2
var excel = "microsoft excel";
var googleApple = "GOOGLE AND APPLE";
var sayHello = "hello world";
console.log(excel.toUpperCase());
console.log(googleApple.toLowerCase());
console.log(sayHello[0].toUpperCase() + sayHello.slice(1, 5), sayHello[6].toUpperCase() + sayHello.slice(7, 11));
// Template String โจทย์ 2 วีิดีโอที่ 2
var text2 = "Hello World";
console.log(text2.startsWith("Hello"));
console.log(text2.endsWith("World"));
var word1 = "Computer";
var word2 = "Death Race";
var word3 = "Republican";
console.log(word1.slice(3, 6));
console.log(word2.slice(0, 6));
console.log(word3.slice(2, 5));
