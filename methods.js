// soal dari ka elsi
// antrian
const antrian = ["Ray", "Fiki", "Fadhilla", "Farah"];
console.log("Antrian Awal : " + antrian);

// nambah antrian
antrian.push("Nabila");
antrian.push("Elsi", "Mazaya");
console.log(antrian);

// elsi pulang
antrian.pop();
console.log(antrian);

// beberapa pulang
antrian.shift();
antrian.shift();
console.log(antrian);

// tomi masuk
antrian.unshift("Tomi");

console.log(antrian);
