//Number, String, Boolean, Undefined, Null, BigInt, Symbol  ---> primitive datatype 
// object array function 

let num = 90;
console.log("age: "+ num);

let str = "Poonam";
console.log("String print : "+str);

let isfollow = false;
console.log("Boolean: "+isfollow);
let isfollowing = true;
console.log("Boolean: "+isfollowing);

let p = null;
console.log(p);

let q = undefined;
console.log(q);

//----->BigInt ***output 1409n bigint me last me n print hoke aata hain
let x = BigInt("1409");
console.log(x); 
console.log(typeof[x]);

//------>Symbol ***output Symbol(Hello!)
let y = Symbol("Hello!");
console.log(y);
console.log(typeof[y]);


//object
const student = {
    fullname : "poonam bhavsar",
    age : 18,
    cgpa : 9.0,
    clg : "gucpc",
    isPass : true
};
console.log(student);
console.log("type of student: "+ typeof[student]);

console.log("age print: "+ student.age);
console.log("cgpa print: "+ student["cgpa"]);