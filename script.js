var cards = ["1","1","1","1","2","2","2","2","3","3","3","3","4","4","4","4","5","5","5","5","6","6","6","6","7","7","7","7","8","8","8","8","9","9","9","9","10","10","10","10","11","11","11","11"];
var dealt =[];
var score = 0;
var wins = 0;
var loses = 0;
var ties = 0;

//Initializes a dealer score to compete against the player//
var dealerCard1 = parseInt(cards[Math.floor(Math.random() * cards.length)]);
var dealerCard2 = parseInt(cards[Math.floor(Math.random() * cards.length)]);

var dealerScore = dealerCard1 + dealerCard2;
if (dealerScore <= 5) {
  var dealerCard3 = parseInt(cards[Math.floor(Math.random() * cards.length)]);
  dealerScore += dealerCard3;
}
if (dealerScore <= 10) {
  var dealerCard4 = parseInt(cards[Math.floor(Math.random() * cards.length)]);
  dealerScore += dealerCard4;
}
  



function deal() {
  //Deals player the first card//
  var ranCard1 = parseInt(cards[Math.floor(Math.random() * cards.length)]);
  dealt.push(ranCard1);
  document.getElementById("yourCards").innerHTML = dealt;
  document.getElementById("dealBtn").onclick = "";
}


function hit() {
  //creates random cards on hit and tests to see if score is over 21//
  var ranCard2 = parseInt(cards[Math.floor(Math.random() * cards.length)]);
  dealt.push(ranCard2);
  ranCard2 = "";
  document.getElementById("yourCards").innerHTML = dealt;
  const reducer = (previousValue, currentValue) => previousValue + currentValue;
  var total = dealt.reduce(reducer);
  score = total;
  document.getElementById("totals").innerHTML = total;
  if (total > 21) {
    alert("Game Over, You went over 21!");
    document.getElementById("hitBtn").onclick = "";
    loses++;
    document.getElementById("loses").innerHTML = loses;
  }
}

function stay() {
  //locks in total as long as score is <=21//
  //checks to see if you won, lost, or tied the dealer//
  if (score == 21) {
    alert("BlackJack! You win!");
  } else if (score <= 21 && score > dealerScore) {
    alert("congratulations, you've won with a total of: " + score + ". The dealer had a score of: " + dealerScore);
    document.getElementById("hitBtn").onclick = "";
    document.getElementById("stayBtn").onclick = "";
    wins++;
    document.getElementById("wins").innerHTML = wins;
  } else if (score <= 21 && score < dealerScore) {
    alert("Loser, you've lost with a total of: " + score + ". The dealer had a score of: " + dealerScore);
    loses++;
    document.getElementById("loses").innerHTML = loses;
    document.getElementById("hitBtn").onclick = "";
    document.getElementById("stayBtn").onclick = "";
    } else if (score <= 21 && score == dealerScore) {
    alert("Tie, you've Tie with a total of: " + score + ". The dealer had a score of: " + dealerScore);
    ties++;
    document.getElementById("ties").innerHTML = ties;
    document.getElementById("hitBtn").onclick = "";
    document.getElementById("stayBtn").onclick = "";
  } else {
    document.getElementById("stayBtn").onclick = "";
  }
}

function reset() {
  score = 0;
  dealt.length = 0;
  document.getElementById("yourCards").innerHTML = "";
  document.getElementById("totals").innerHTML = "";
  document.getElementById("dealBtn").onclick = deal;
  document.getElementById("hitBtn").onclick = hit;
  document.getElementById("stayBtn").onclick = stay;
}






