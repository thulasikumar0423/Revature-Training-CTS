let nums = [1,2,3];
nums.forEach(n=> {
    console.log(n *2);
});


//transformation inarray then can use map function 

let doubled = nums.map(n=> n*2);
console.log(doubled); //[2,4,6]

//filter we can filter out the values based on some condition 

//get even numbers

let even = nums.filter( n => n%2 ===0);
console.log(even);[2]

//reduce  -- reduce the collection of values to a single value 
//sum of an array -10 numbers-single value 


//10,20,30
//total =0
//total+a[0] = 0+10
//10+a[1]= 10+20+30
//group of values ---10 to 20 ---single value -----reduce function 
let sum = nums.reduce((total, n) => total +n,0);//for loop 
console.log(sum); //6