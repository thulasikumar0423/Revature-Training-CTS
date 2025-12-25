//Closure --- a closure is created when a function remembers and access variables from its 
// outer scope even after outer function has finished execution 

function outer (){
    let count =0;

    function inner (){
        count ++;
        console.log(count);

        
    }
    return inner ;
}

const counter = outer();
counter();//1
counter();//2
counter();//3
counter();




function timer(){
    let message ="hello after 2 seconds";
    setTimeout(function() {
        console.log(message);
        

    },2000);
}
timer();
