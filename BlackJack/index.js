let sum = 0;
let random = getRandomNumber();
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let cards = document.getElementById("cards");
let showSum = document.getElementById("sum");
let player = {
    name: prompt("Enter your name: "),
    chips: 250
};
let amount = 0;
document.getElementById("playerInfo").textContent = player.name+": $"+amount;
btn2.disabled = true;
let number = 0;

function startGame() {
    let playingGame = confirm("Do you want to play the game? ");
    if(playingGame) {
        number = parseInt(prompt("Choose a number between 1 to 100: "), 10);
        if(number < 1 || number > 100) alert("Enter a valid number!!");
        else {
            sum = 0;
            showSum.textContent = 0;
            cards.textContent = "";
            console.log(number);
            btn2.disabled = playingGame;
            let first = getRandomNumber();
            let second = getRandomNumber();
            cards.textContent += first+" ";
            cards.textContent +=  second+" ";
            sum += second+first;
            showSum.textContent = sum;
            btn1.disabled = true;
            btn2.disabled = false;
            display();
        }
    }
}
function newCard() {
    let newCard = Math.floor(Math.random()*6)+1;
    cards.textContent += newCard+" ";
    sum += newCard;
    showSum.textContent = sum;
    display();
}
function display() {
    number = parseInt(number, 10);
    if(sum === number) {
        document.getElementById("message-el").textContent = "You got black Jack";
        amount += player.chips;
        console.log(amount);
        document.getElementById("playerInfo").textContent = player.name+": $"+amount;
        btn1.disabled = false;
        btn2.disabled = true;
    }
    else if(sum < number) document.getElementById("message-el").textContent = "Want to pick a new card?";
    else {
        document.getElementById("message-el").textContent = "You Lose!";
        amount -= 10;
        console.log(amount);
        if(amount < 0) document.getElementById("playerInfo").textContent = player.name+": -$"+amount*-1;
        else document.getElementById("playerInfo").textContent = player.name+": $"+amount;
        btn1.disabled = false;
        btn2.disabled = true;
    }
}
function getRandomNumber() {
    let randomNumber = Math.floor(Math.random()*13)+1;
    if(randomNumber === 1) return 11;
    else if(randomNumber > 10) return 10;
    else return randomNumber;
}