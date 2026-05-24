//var let and const

let a = 14;
console.log(a);

a = 1409;
console.log(a);

const b = 10;
console.log(b);

//b = 15;           ----> error show because const value not change and update
//console.log(b);

//Block scope 
{
    let p = 20;
    console.log(p);
}

{
    let p = 1;
    console.log(p);
}
//--->both values are print becuase block are alg 

