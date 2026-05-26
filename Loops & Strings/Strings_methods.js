//Strings method

//str.toUpperCase()
//str.toLowerCase()
//str.trim //removes whitespaces --->starting and ending white space remove krta hain
//str.slice(start,end?)  //returns part of string
//str1.concat(str2) //join str2 with str1
//str.replace(searchVal,newVal)
//str.charAt(idx)

let str = "Poonam Bhavsar";
console.log(str);

console.log("Upper case: ",str.toUpperCase());
console.log("lower case: ",str.toLowerCase());

//strings immutable ---> not changebal
//bich ki space naii remove krta only staring and ending ki hii remove hothi hain
let st = "    poonam bhavsar  ";
console.log(st.trim());

//slicing
let num = "01234567";
console.log(num.slice(1,6)); //0 and 7 nikdi jse

let numm = "hello";
console.log(numm.slice(0,3));

//concat strings ko jodna

let str1 = "apna";
let str2 =  "college";

let result = str1.concat(str2);
console.log(result);

//let result = str1 + str 2;

//replace
let repl = "hello";

console.log(repl.replace("h","p"));
console.log(repl.replace("lo","p"));
console.log(repl.replaceAll("hello","poonam"));

//charAt(index)

let inde = "Ilovejs";
console.log(inde.charAt(3)); //v

