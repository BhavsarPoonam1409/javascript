//Loops start
//1. for loop 2. while loop 3. do while loop

console.log("For loop start...!!");
for(let i=1; i<=5; i++){
    console.log("software engineer -- Poonam Bhavsar..");
}

// calculate sum of 1 to n // 1 to 5
let sum = 0;
//let n = 5;
//for(let i = 0; i<=n; i++)
for(let i=0; i<=5; i++){
    sum = sum + i;
}
console.log(sum);

// infinite loop --->never ends continue chlte rehte hain never create this loop
//stoping conditing never end true condition  


// While Loop
/*
    while(condition  --> stoping cond){
        // do some work 
    }
*/

console.log("While Loop start...!!");
let i = 1;
while(i<=5){
    console.log("i = ", i);
    i++;
}


// Do While loop
/* aek baar toh run hogha kam hogha hi hogha fhir cond chek hoghi
   do{
    //do some worrk
   }while(condition);
*/

let p = 20;
do{
    console.log("Apna College");
    p++;
} while(p<=10);


// 1 to 5 no print 
let q = 1;
do{
    console.log("q = ",q);
    q++;
}while(q<=5);


// for-of loop(string and array pe loop lagane ke liye)   for-in loop()  some special datatype
/* 
for(let val of strvar){
of keyword
    //do some work
}
*/

let str = "Apnacollege";
let length = 0;
for(let i of str){ // i(iterator ---> character) me value automic aati hain
    console.log("i = ",i);
    length++;
}
console.log("string size ",length); //11

//for-in loop (objects,arrays)

let student ={
    name : "poonam bhavsar",
    age : 18,
    cgpa : 9.0,
    isPass : true
};

for(let key in student){  // for in loop woh objects ke key deta hain
    console.log("key = ",key , "value= ", student[key]);
}



