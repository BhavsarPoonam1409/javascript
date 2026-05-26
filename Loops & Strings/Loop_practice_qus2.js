// practice qus 2

let gamenum = 14;

// user jode thi no lidho
let usernum = prompt("Guess a game number: ");

while(gamenum != usernum){
    usernum = prompt("You guess wrong number. Guess game number again: ");
}

console.log(gamenum,"Congrasulation you guess right number");

// == tab dena hain jab gamenum humne "" string me dala hoo
