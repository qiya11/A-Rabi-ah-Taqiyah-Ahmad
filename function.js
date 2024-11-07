// soal pertama
function printHeart() {
    console.log("<3");
}

// Call the function
printHeart();


// soal ke-2
function multiply(a, b) {
    return a * b;
}

// Example usage:
console.log(multiply(10, 25)); // 250
console.log(multiply(50, 50)); // 2500
console.log(multiply(20, 10)); // 200


// soal ke-3 A
let animal = "Giant Pacific Octopus";

function observe() {
    let animal = "Pajama Squid";
    console.log(animal);
}

observe();

// soal ke-3 B
let deadlyAnimal = "Blue-Ringed Octopus";

function handleAnimal() {
    let deadlyAnimal = "Scorpionfish";
    console.log(deadlyAnimal);
}

handleAnimal();
console.log(deadlyAnimal)


// soal ke-4
const sayHello = (name) => `Hello ${name}!`;

// Example usage:
console.log(sayHello("Hagrid")); // "Hello Hagrid!"
console.log(sayHello("Luna"));   // "Hello Luna!"
