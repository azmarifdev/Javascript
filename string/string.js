let text = 'HELLO WORLD';
// Extracting String Characters
console.log(text.at(0));
console.log(text.charAt(0));
console.log(text.charCodeAt(0));

console.log(text.at(89));
console.log(text.charAt(88));
console.log(text.charCodeAt(65));
// Property Access [ ]

console.log(text[0]);
console.log(text[65]);
console.log((text[0] = 'A'));
console.log(text); // 13 number line is not working

// Extracting String Parts

// slice the string
let slice = 'Apple, Banana, Kiwi';
console.log(slice.slice(7, 13)); // 7 theke 13 er age  porjonto nibe
console.log(slice.slice(7));
console.log(slice.slice(-12, -6));

// JavaScript String concat()
let text1 = 'Hello';
let text2 = 'World!';
console.log(text1.concat(' ', text2));

 