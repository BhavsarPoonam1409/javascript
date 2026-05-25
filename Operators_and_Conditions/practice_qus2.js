// write a code which can give grades to students according to their scores:
/*
    80-100 A
    70-89 B
    60-69 C
    50-59 D
    0-49 F
*/

//let marks = 99;
let marks = prompt("Enter your number: ");

if(marks>=90 && marks<=100){
    console.log("Grade is a A");
}
else if(marks>=70 && marks<=89){
    console.log("Grade is a B");
}
else if(marks>=60 && marks<=69){
    console.log("Grade is a C");
}
else if(marks>=50 && marks<=59){
    console.log("Grade is a D");
}
else{
    console.log("Grade is a F");
}