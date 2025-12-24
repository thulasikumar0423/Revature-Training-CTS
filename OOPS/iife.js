//IIFE-- immediately invoked function executed 

//an iife is afunction that runs  immediately 


(function (name){
    console.log("HEllo " + name);
    
})("Swetha");


function hello(){
    console.log("hello");
    
}
hello();

//alternate iife format

(function (){
    console.log("IIfe executed");
    
})();

/////////////////

const counter = (function (){
    let count =0;
    return{
        increment(){
            count++;
            console.log(count);
            
        },
        decrement(){
            count--;
            console.log(count);
            

        }
    };
})();
counter.increment();//1
counter.increment();//2
counter.decrement();//1
counter.decrement();//0