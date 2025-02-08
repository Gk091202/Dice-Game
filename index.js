document.getElementById("rollButton").addEventListener("click", rollDice);

function rollDice() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;

    document.querySelector(".img1").setAttribute("src", "dice" + randomNumber1 + ".png");
    document.querySelector(".img2").setAttribute("src", "dice" + randomNumber2 + ".png");

    let winnerText = document.getElementById("winnerText");
    
    if (randomNumber1 > randomNumber2) {
        winnerText.innerHTML = "🚩 Player 1 Wins!";
    } else if (randomNumber2 > randomNumber1) {
        winnerText.innerHTML = "Player 2 Wins! 🚩";
    } else {
        winnerText.innerHTML = "It's a Draw!";
    }
}
