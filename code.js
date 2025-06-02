//Strings (5 questions)
//Convert this string to uppercase
//let greeting = "hello world";

let greeting = "hello world";
console.log(greeting .toUpperCase());
//Extract "world" from this string using slice():
let greet = "hello world";
let grade = greeting.slice(5)
console.log(grade)

//let text = "hello world";

let text = "hello world";
console.log(text .toUpperCase());

//Replace all spaces with hyphens in this string:

//let sentence = "JavaScript is awesome";

let sentence ="Javascript is awesome";
let gapsent = sentence.replaceAll( " " ,"-" );
console.log(gapsent)

//Check if this string starts with "Mr":

//let name = "Mr. Smith";

let name = "Mr Smith";
let startmr = name.startsWith("Mr")
console.log(startmr)

//Split this string into an array of words:

//let phrase = "apple,banana,orange";

let phrase = "apple,banana,orange";
let spit = phrase.split(",");
console.log(spit)

//Numbers (5 questions)
//Convert this string to a number:

//let numStr = "42";

let numStr = "42";
let nums = Number(numStr);
console.log(nums)

//Round this number to 2 decimal places:

//let price = 19.9876;

let price = 19.9876;
let rice  = price .toFixed(2);
console.log(rice)

//Generate a random number between 1 and 10:

let numrand = Math.floor(Math.random()-1)+10;
console.log(numrand)

//Check if this value is NaN:
//let result = 0/0;

let result = 0/0;
let answer = isNaN(result);
console.log(answer);

//Convert this number to a hexadecimal string:
//let value = 255;

let value = 255;
let hexavalue = value.toString(16);
console.log(hexavalue);

//Arrays (5 questions)
//Add "grape" to the end of this array:

//let fruits = ["apple", "banana"];
let fruits = ["apple", "banana"];
fruits.push("grape");
console.log(fruits);

//Remove the first element from this array:
//let colors = ["red", "green", "blue"];

let colors = ["red", "green", "blue"];
colors.shift();
console.log(colors);

//Combine these two arrays:
//let arr1 = [1, 2];
//let arr2 = [3, 4];

let arr1 = [1, 2];
let arr2 = [3, 4];
let addarr = arr1.concat(arr2)
console.log(addarr)
//Reverse this array:

//let letters = ["a", "b", "c"];

let letters = ["a", "b", "c"];
letters.reverse();
console.log(letters);

//Check if "banana" exists in this array:
//let groceries = ["apple", "orange", "banana"];

let groceries = ["apple", "orange", "banana"];
let hasBanana = groceries.includes("banana");
console.log(hasBanana);

//Objects (5 questions)
//Access the age property of this object:
//let person = { name: "John", age: 30 };

let person = { name: "John", age: 30 };
console.log(person.age);

//Add a new property to this object:
//let car = { make: "Toyota" };
// Add model: "Camry"

let car = { make: "Toyota" };
car.model = "Camry";
console.log(car);

//Get all keys of this object:
//let student = { name: "Alice", grade: "A" };

let student = { name: "Alice", grade: "A" };
let studentKeys = Object.keys(student);
console.log(studentKeys);
//Delete the password property from this object:
//let user = { name: "Bob", password: "123" };

let user = { name: "Bob", password: "123" };
delete user.password;
console.log(user);

//Check if this object has an "email" property:
//let contact = { name: "Sarah", phone: "555-1234" };

let contact = { name: "Sarah", phone: "555-1234" };
let hasEmail = contact.hasOwnProperty("email");
console.log(hasEmail);
