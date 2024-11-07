// data types: string
let greeting = "Hello, Guys!";
console.log(greeting); // Output: Hello, Guys!

// data types: boolean
let isLikePhotography = true;
console.log(isLikePhotography); // Output: true

// data types: numbers
let age = 21;
let pi = 2.746;
console.log(age); // Output: 21
console.log(pi);  // Output: 2.746

// data types: array
let fruits = ["Watermelon", "Jackfruit", "Durian"];
console.log(fruits);         // Output: ["Watermelon", "Jackfruit", "Durian"]
console.log(fruits[2]);      // Output: Durian

// data types: object
let person = {
    name: "Nathan",
    age: 25,
    isStudent: false
};
console.log(person);         // Output: {name: "Nathan", age: 25, isStudent: false}
console.log(person.name);    // Output: John

// console log
const hobby = {first:"Photography"};
console.log(hobby);

// logical operator
let isFootball = true;
let hasBasketball = false;
console.log(isFootball && hasBasketball); // Output: false (AND operator)
console.log(isFootball || hasBasketball); // Output: true (OR operator)
console.log(!isFootball);                 // Output: false (NOT operator)

// equality comparison
let x = 100;
let y = "100";
console.log(x == y);   // Output: true (loose equality)
console.log(x === y);  // Output: false (strict equality)