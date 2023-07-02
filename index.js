// var randomNumber = Math.floor(Math.random()*6) + 1; //give me a random number from 1-6
// var randomImage = "dice" + randomNumber + ".png"; // dice1.png
// var randomSource = "images/" + randomImage;// images/dice1.png
// document.querySelectorAll("img")[0].setAttribute("src", randomSource);

// var randomNumber2= Math.floor(Math.random()*6) + 1; // to generate anoda random number different from the first one
// var randomImage2 = "dice" + randomNumber2 +".png";
// var randomSource2 = "images/" + randomImage2;
// document.querySelectorAll("img")[1].setAttribute("src", randomSource2);

// if(randomNumber===randomNumber2){
//     document.querySelector("h1").innerHTML= "Draw!";
// }
// else if(randomNumber > randomNumber2){
//     document.querySelector("h1").innerHTML= "Player1 Wins";
// }
// else if (randomNumber < randomNumber2 ){
//     document.querySelector("h1").innerHTML = "Player 2 Wins";
// }
// else{
//     document.querySelector("h1").innerHTML="Refresh Me";
// }


var images =["images/dice1.png","images/dice2.png", "images/dice3.png", "images/dice4.png","images/dice5.png"];
var randomNumber=Math.floor(Math.random()*6);
document.querySelectorAll("img")[0].setAttribute("src",images[randomNumber]);

var randomNumber2 = Math.floor(Math.random()*6);
 document.querySelectorAll("img")[1].setAttribute("src",images[randomNumber2]);


