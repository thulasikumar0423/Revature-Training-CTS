//arrow function is a shorter and cleaner way to write functions in Js 
//es6

/*function add(a,b){
    return a+b;
}*/

//const add =(a,b)=>{return a+b;}

const add=(a,b)=>a+b; //shorter and implicit return 
console.log(add(8,9));


const greet1=()=>console.log("hello"); //no parameter
greet1();


//single parametr 

const squar =x=>x*x;
console.log(squar(5));

//multiple arguments


const mul =(a,b)=>a*b;
console.log(mul(2,3));


/////////////////////////////////////

const numbers3 = [3,8,9,45,1];
const found = numbers3.find(num=> num >6);
console.log(found);

////////////////////

const numbers4 = [3,8,9,45,1];
const found1 = numbers3.filter(num=> num >6);
console.log(found1);


///////////////////
const  ages = [18,22,25,17];
//check if atleast one person is under 18

const hasMinor = ages.some(age=> age<18);
console.log(hasMinor);//true

//check if all the persons are adults
const allAdults=ages.every(age=> age >18);
console.log(allAdults);//false


const students =[
     { name:"asha", marks:50},
     {name:"revi", marks:90},
     {name:"remya",marks:93}

];

//get names of students scoring above 80

const purugulu=students
                .filter(student => student.marks >80)
                .map(student=>student.name);
console.log(purugulu);


//Callback 

function greet(name, callback) //greet function --passing one callback function 
                            //cal the callback() 
{
    console.log("Hello"+ name);
    callback(); 
}

function sayBye(){
    console.log("GoodBye!");  
}
greet("Thulasi", sayBye);                         
   
function displayMessage(){
    console.log("This message appears after 3 seconds");
    
}

setTimeout(displayMessage, 3000);


//////////////////////////////


