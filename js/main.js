// ************************* String methodes ***********************************

//const myVariable = "Mathematics sdfas";

//console.log(myVariable.length); stringre is ugyanugy lehet hasznalni a length fuggvenyt.

// console.log("Ennek a hossza".length) igy is lehet a hosszat nezni

// .chart() - a sztring ,,x" elemet adja vissza
// console.log(myVariable.charAt(0));

// .indexOf("x") - megmutatja x  elso poziciojat a stringbenű
// .lastindexof("x") - megmutatja x utolso poziciojat a stringben
// console.log(myVariable.indexOf("at"));

// .slice(x,y) - string erteke x,y között, ha csak x van, akkor a string vegeig kiadja
// console.log(myVariable.slice(2, 3));

// .includes ("xxxx") - xxxx benne van e az adott stringbe. BOO-t ad vissza
// console.log(myVariable.includes("ics"));

// .split("x") - x-nél eltöri a sztinget két részre. Ha nincs x, akkor minden helyen szét töri.
// ha x nincs a stringben nem csinal semmit. LISTAT CSINAL BELOLE!!!
// console.log(myVariable.split("e"));

// ************************* Number methodes ***********************************

// const myNumber = 42.1453125421;
// const myFloat = 42.91241;
// const myString = "45.23214dsfbsdj";

// Number(string) - stringből számot csinál. BOO-t is lehet vele konvertálni. false=0;true=1
// console.log(Number(myString) + 3);

// isInteger() - BOO-t ad vissza. Ha egesz szam akkor true
// console.log(Number.isInteger(myString));

// parsefloat(x) - elemzi x-t, lebegőpontos számot ad vissza ha szám
// console.log(Number.parseFloat(myFloat));

// .toFixed(x) - . előtti számot kerekíti x tizedesre
// console.log(myNumber.toFixed(2));

// .parseInt(x) - tizedes vessző utan nem nézi hogy mi van és azt adja vissza
// console.log(Number.parseInt(myString));

// ************************* Math methodes ***********************************

// console.log(Math.PI);

// Math.trunc - barmilyen szám egész értékét adja vissza
// console.log(Math.trunc(Math.PI));
// console.log(Math.round(Math.PI)); // kerekiti a szamot
// console.log(Math.ceil(3.1)); // barmennyi van a tizedes vesszo utan, felfele kerekiti
// console.log(Math.floor(Math.PI)); // mindig lefele kerekiti

// Math.pow(x,y) - x az y-ik hatvanyon
// console.log(Math.pow(2, 10));

// console.log(Math.min(2, -31, 35)); // legkisebb szamot adja vissza, max!

//random szam, mindig 0 és 1 között adja vissza
// 1-10 között: +1, mert ha nem, akkor 0-9 között megy

// console.log(Math.floor(Math.random() * 10) + 1);

// *****************- a nevemből írjon ki egy random betűt.

// const myName = "Krisztian";
// console.log(myName);
// const myNamelength = myName.length;
// console.log(myNamelength);
// const first = Math.floor(Math.random() * (0 - myNamelength) + myNamelength);

// console.log(myName.slice(first, first + 1));

// ***** IF statements *******

// ternary Operator

// syntax
// condition ? ifTrue : ifFalse

// ha a conditionbe van valami, akkor csinalja azoakt

// let soup = 1;
// let customerBanned = false;
// let response = soup ? "Yes we have soup." : "No, we dont have soup.";
// //console.log(response);

// let response2 = customerBanned
//   ? "We dont have food for you."
//   : soup
//   ? "But we have soup today."
//   : "We dont have soup today.";

// console.log(response2);

// ***********-User Inputs **********

// alert("Wtf is this shit?"); // alert = popup window

// let myBoo = confirm("OK === true\nCancel===False");
// console.log(myBoo);

// let name = prompt("Please enter your name: ");
// console.log(name ?? "You didnt enter your name"); // ??- ellenorzésre való

/// ********** rock, paper, scissors *********

let playGame = confirm("Do you wanna play rock, paper, scissors ?");

if (playGame) {
  // play
  let playerChoise = prompt(
    "Please enter your choise: rock, paper or scissors "
  );
  let computerChoise = Math.floor(Math.random() * 3) + 1;
  if (computerChoise === 1) {
    computerChoise = "rock";
    console.log("Computers choise: ", computerChoise);
    if (computerChoise === playerChoise) {
      console.log("Tie game! ");
    } else if (playerChoise === "paper") {
      console.log("Computer win!");
    } else if (playerChoise === "scissors") {
      console.log("You win! ");
    }
  } else if (computerChoise === 2) {
    computerChoise = "paper";
    console.log("Computers choise: ", computerChoise);
    if (computerChoise === playerChoise) {
      console.log("Tie game! ");
    } else if (playerChoise === "rock") {
      console.log("Computer win!");
    } else if (playerChoise === "scissors") {
      console.log("You win! ");
    }
  } else if (computerChoise === 3) {
    computerChoise = "scissors";
    console.log("Computers choise: ", computerChoise);
    if (computerChoise === playerChoise) {
      console.log("Tie game! ");
    } else if (playerChoise === "paper") {
      console.log("Computer win!");
    } else if (playerChoise === "rock") {
      console.log("You win! ");
    }
  } else {
    alert("Wtf man?");
  }
  let playAgain = confirm("Do you wanna play again? ");
  if (playAgain) {
    location.reload();
  } else {
    alert("Ok.");
  }
}
