//convert json to javascript object 

const jsonStr = '{"name":"Thulasi", "age":22}';

const obj = JSON.parse(jsonStr);
console.log(obj.name);
console.log(obj.age);



//convert javascript to json format 

const user1 ={
    name:"THulasi",
    age:22
};

const json1 = JSON.stringify(user1);
console.log(json1);


//Object -> JSON STring 

const user3= {name:"Swetha", age: 22, skills:["tableau","python"]} ;

const json2 = JSON.stringify(user3);

console.log(json2);


//JSON -> object

const parsed = JSON.parse(json2);

console.log(parsed.name, parsed.skills[0]);

//Note: JSON only supports data types like number/string/boolean/null/array/object(no functions)


