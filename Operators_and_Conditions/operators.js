//Arithmetic Operators
//+ - * /  modulus  exponentiation  increment   decrement 

let a = 5;
let b = 2;

console.log("a + b = "+ a + b);
console.log("a - b = ",a - b);
console.log("a * b = ", a * b);
console.log("a / b = ", a / b); 

console.log("a % b = ", a % b);

//exponentiation 2 ni 2 ghath 2 * 2 --- 3 ni 4 ghathh 3 * 3 * 3 * 3  
// ** use hoghe a ** b => a ni b ghath
console.log("a ** b = ", a ** b); //5 ^ 2 ---5 * 5 => 25 power

//unary operators 1.increment(a++) 2.decrementt(a--)

console.log(a,b); //print 5 and 2
a = a + 1; //6
console.log("a = "+a);  //6

a++; //same as a-- q value minus
console.log("a = "+a);

console.log(a++); //5
console.log(a); // 6

console.log(++a); //6

//----> Assignemnt operators
// 1. = 2. += 3. *= 4. %= 5. **=
//a+=1 ---> a= a + 1

let x = 5;
let y = 2;

x+=4; // a = a+4
console.log("x = "+ x); //9

x-=4; // a=a-4
console.log("x ki minus values: "+x);  //5 ---> 9 - 4

//---> Comparison Operators
// 1.== 2.!= 3.!= 4.!== 5.> 6.< 7.>= 8.<=

let p = 5;
let q = 2;
//jese q ko string me le let q = "5"; true //String --> number me conver kreghi fjir compare
console.log("5==2", p==q); //false

console.log(a!=b); //true

//===strict datatype ko bhi check krege aur string num ka compare nai hoo skta hain
/*
let p = 5;
let q = "5";
console.log("a===b", a===b); //false
console.log("a!==b", a!==b); //true
*/

//---> Logical Operators multiple expresion ko last me true ya false ans deta hain
//1. AND(&&) both are true --->true
//2. OR(||)  both mese koi bhi aek true hoo toh --->true
//3. NOT(!) true-->false false-->true

let l1 = 6;
let l2 = 5;

let cond1 = a > b;
let cond2 = l1===6;

console.log("cond1 && cond2 = ", cond1 && cond2);

console.log("cond1 || cond2 = ", l1<l2 || l1===6);

console.log("!(6<5) = ", !(l1<l2)); //true