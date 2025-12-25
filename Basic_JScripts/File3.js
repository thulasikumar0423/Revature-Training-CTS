//printing numbers 1 to n
// const readline = require("readline");
// const r1 =readline.createInterface({
//     input:process.stdin,
//     output:process.stdout,
// });

// r1.question("Enter number",(n) =>{
//     n=Number(n);

//     for(let i =0;i<=n;i++){
//         console.log(i);
        
//     }
//     r1.close();
// });


//printing even number in 1 to 100
// const readline=require("readline");
// const r1=readline.createInterface({
//     input:process.stdin,
//     output:process.stdout,
// });

// r1.question("Enter numbe:",(num)=>{
//     num=Number(num);

//     for(let i=0;i<num;i++){
//         if(i%2===0){
//             console.log(i);
            
//         }
//     }
//     r1.close();
// })

//printing odd numbers using whule loop 
// const readline = require("readline");

// const r1=readline.createInterface({
//     input:process.stdin,
//     output:process.stdout,
// });

// r1.question("Enter Number:", (num)=>{
//     num=Number(num);
//     let i =1;
//     while(i<=num){
//         if(i%2!==0){
//             console.log(i);
            
//         }
//        i++;

//     }
//      r1.close();
// });


//switch in calculator
// const readline = require("readline");

// const r1 = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// r1.question("Enter first number: ", (n1) => {
//   r1.question("Enter second number: ", (n2) => {
//     r1.question("Enter operator (+ - * / %): ", (opr) => {

//       let num1 = Number(n1);
//       let num2 = Number(n2);

//       switch (opr) {
//         case "+":
//           console.log(num1 + num2);
//           break;
//         case "-":
//           console.log(num1 - num2);
//           break;
//         case "*":
//           console.log(num1 * num2);
//           break;
//         case "/":
//           console.log(num1 / num2);
//           break;
//         case "%":
//           console.log(num1 % num2);
//           break;
//         default:
//           console.log("Invalid operator");
//       }

//       r1.close();
//     });
//   });
// });

//leap year 
const readline=require("readline");
const r1 = readline.createInterface({
    input :process.stdin,
    output:process.stdout,
})

r1.question("Enter Year:",(yr)=>{
    yr =Number(yr);
    if((yr%4 === 0 && yr %100 !==0) || (yr%400===0)){
        console.log(yr+ " year is leap year");
        
    }
    else{
        console.log(yr+ " year is not leap year");
        
    }
    r1.close();
});