//Strings started
let str = "Poonam Bhavsar";

let str2 = 'Poonam';

//inbuild properties(internal var) and functions(methods)

//length
console.log("Length is: ",str.length);
console.log("length is: ", str2.length);

//string indices----> index char ki position
console.log(str[0]);


//Template Literals(``) in js ---> special type of string
let sentence = `This is a template literals`;
console.log(sentence);
console.log("Type of:",typeof sentence);

//Example
let obj ={
    item : "Pen",
    price : 10
};

console.log("The item is",obj.item,"is",obj.price,"price");

//template literals ma krvu hoy easy way ma
let output = `The item is ${obj.item} is  ${obj.price} price `;
console.log(output);

let specialstring = `This is a template literal ${1+2+3+1}`;
console.log(specialstring);
//string hii hothi hain expression ko plach holders dalte hain interview me puch skte hain

//escape charcters
console.log("Poonam\nBhavsar");

//tab space ke liye \t
str = "Apna\tcollege";
console.log(str.length);
//aek char ghinta hain 
