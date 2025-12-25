const myPromise = new Promise((resolve, reject)=>{
    //simulate an asynchronous operation

    setTimeout(()=> {
        const success = true;
        //const success = false;
        if(success){
            resolve("Operation completed succesfully");
        }else{
            reject("Operation failed");
        }
    },2000);
});

//using the promise
myPromise.then((result)=>{
    console.log(result);
    
})
.catch((error)=>{
    console.log(error);
    
});

//creating an aysnc function 
async function performOperation(){
    try{
        const result = await myPromise;
        console.log(result);
    }catch(error){
        console.log(error);
    }

}
performOperation();