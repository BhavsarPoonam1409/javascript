console.log("conditions are start...!!");
// 1. if statment 2. if-else 3. else-if statments 4. switch 

let age = 16;
if(age > 18){
    console.log("You are eligibal for voting");
}
else{
    console.log("you can not eligibal for voting");
}

let mode ="darkmode";
let color;
if(mode == "darkmode"){
    color = "black";
}
console.log("mode color : ",color);

//odd no and even no find 
let num = 10;
if(num % 2 === 0){
    console.log(num,"Even number..");
}
else{
    console.log("Odd number..");
}

if(age<18){
    console.log("Junior");
}
else if(age>60){
    console.log("senior");
}
else{
    console.log("middle");
}

//Ternary operators
let result = age >= 18 ? "adult" : "not adult";
console.log(result);
//age >= 18 ? console.log("adult") : console.log("not adult");

//MDN docs for reading 
//go to google and search MDN web docs
