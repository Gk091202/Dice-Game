var randomNumber1 = Math.floor(Math.random() * 6) + 1; // Generates a number between 1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; // Generates dice1.png - dice6.png

var randomImageSource = randomDiceImage; // dice1.png - dice6.png

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "dice" + randomNumber2 + ".png"; // Corrected path

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

// If player 1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
