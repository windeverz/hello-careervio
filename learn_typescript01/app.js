var text;
text = "Hello World";
console.log(text);
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
