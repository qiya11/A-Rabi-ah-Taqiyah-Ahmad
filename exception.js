//display pesan di console
function myFirst(){
    myDisplayer("Good bye");
}

function mySecond(callback){
    myDisplayer("Hello");
    callback();
}

function myDisplayer(message){
    console.log(message);
}

mySecond(myFirst);

//DELAY
console.log("Paragraf 1");
setTimeout(() => {
    console.log("Paragraf 2");
}, 5000);
console.log("Paragraf 3");
console.log("Paragraf 4");
console.log("Paragraf 5");
console.log("Paragraf 6");
