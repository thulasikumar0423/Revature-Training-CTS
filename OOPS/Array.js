//array is used to store multiple values in a single varaible
let fruits = ["apple", "banana", "mango"];

//LIFO FIFO ---array

fruits.push("orange"); // add orange 
fruits.pop(); //pops orange 
fruits.unshift("kiwi"); //add kiwi at first
fruits.shift(); //remove from start 

console.log(fruits.length);


let name = "Swetha";
let msg =`hello ${name},welcome to ES6!`;
console.log(msg);

//default parameters

function greet(name ="Guest"){
    console.log(`Hello${name}`);
    
}
greet(); // helloguest

greet("Swetha");