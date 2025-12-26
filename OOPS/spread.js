//Spread operator (...) is used to exapn elements of an array, object or iterable
//into individual elements 

//const { log } = require("console");

const arr1=[1,2,3];
const arr2=[...arr1,5,6,7];
console.log(arr1);

console.log(arr2);

//prevents reference sharing


const ar1=[1,2];
const ar2 =[3,4];
const ar3 =[1,6,8,9,2]

const merged =[...ar1,...ar2,19,21,3,47,...ar3];
console.log(merged);

const num1 =[2,3,4]
const num2 =[1,...num1,5];
console.log(num2);

//spread operator used in cloning arrays/objects
/////////////////////////////////////////////////

//Rest Operator ---(...) is used to collect multiple values into single 
//array

//used in function parameters and destructuring (packing together)

function sum(...numbers){
    let total =0;
    for(let n of numbers){
        total+=n;
    }
    return total;
}
console.log(sum(10,20,30));
console.log(sum(1,2,3,4,5));


//
function display(name,...skills)
{
    console.log("Name: "+ name);
    console.log("SKills: " + skills);
}
 display("Swetha","python","tableau","SQL");


 //function and destructuring

 const values =[1,2,3,4,5];
 const [first,fourth,...remaining]=values;
 console.log(first);
 console.log(fourth);
 console.log(remaining);
 
 
 


