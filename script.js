var cards = ["1","1","1","1","2","2","2","2","3","3","3","3","4","4","4","4","5","5","5","5","6","6","6","6","7","7","7","7","8","8","8","8","9","9","9","9","10","10","10","10","10","10","10","10","10","10","10","10","10","10","10","10","11","11","11","11"];
var dealt =[];
var score = 0;
var dealerScore;
var wins = 0;
var loses = 0;
var ties = 0;
var money = 1000;
var gamble;
document.getElementById("money").innerHTML = "Money: " + money;
var oneCard = dealt[0];
var twoCard = dealt[1];
var threeCard = dealt[2];
var fourCard = dealt[3];
var fiveCard = dealt[4];

//starts the round for the player
function deal() {
  //Asks user how much they want to bet
  var bet = parseInt(prompt("Please enter a bet for the round: "));
  if (bet <= money) {
    gamble = bet;
    //Deals player the first card//
    var ranCard1 = parseInt(cards[Math.floor(Math.random() * cards.length)]);
    dealt.push(ranCard1);
    document.getElementById("yourCards").innerHTML = dealt;
    document.getElementById("dealBtn").onclick = "";

    //places card images on deal
    if (dealt[0] == 1) {
      document.getElementById("card1").src = "images/ace.png";
    } else if (dealt[0] == 2) {
      document.getElementById("card1").src = "images/2.png";
    } else if (dealt[0] == 3) {
      document.getElementById("card1").src = "images/3.png";
    } else if (dealt[0] == 4) {
      document.getElementById("card1").src = "images/4.png";
    } else if (dealt[0] == 5) {
      document.getElementById("card1").src = "images/5.png";
    } else if (dealt[0] == 6) {
      document.getElementById("card1").src = "images/6.png";
    } else if (dealt[0] == 7) {
      document.getElementById("card1").src = "images/7.png";
    } else if (dealt[0] == 8) {
      document.getElementById("card1").src = "images/8.png";
    } else if (dealt[0] == 9) {
      document.getElementById("card1").src = "images/9.png";
    } else if (dealt[0] == 10) {
      document.getElementById("card1").src = "images/10.png";
    } else if (dealt[0] == 11) {
      document.getElementById("card1").src = "images/ace.png";
    }

    //Initializes a dealer score to compete against the player//
    var dealerCard1 = parseInt(cards[Math.floor(Math.random() * cards.length)]);
    var dealerCard2 = parseInt(cards[Math.floor(Math.random() * cards.length)]);
    dealerScore = dealerCard1 + dealerCard2;

    if (dealerScore <= 5) {
      var dealerCard3 = parseInt(cards[Math.floor(Math.random() * cards.length)]);
      dealerScore += dealerCard3;
    }
    if (dealerScore <= 10) {
      var dealerCard4 = parseInt(cards[Math.floor(Math.random() * cards.length)]);
      dealerScore += dealerCard4;
    }
  } else {
    alert("Please enter a valid bet.");
  }
}

//creates random cards on hit and tests to see if score is over 21//
function hit() {
  var ranCard2 = parseInt(cards[Math.floor(Math.random() * cards.length)]);
  dealt.push(ranCard2);
  //places card images when dealt
  if (dealt[1] == 1) {
    document.getElementById("card2").src = "images/ace.png";
  } else if (dealt[1] == 2) {
    document.getElementById("card2").src = "images/2.png";
  } else if (dealt[1] == 3) {
    document.getElementById("card2").src = "images/3.png";
  } else if (dealt[1] == 4) {
    document.getElementById("card2").src = "images/4.png";
  } else if (dealt[1] == 5) {
    document.getElementById("card2").src = "images/5.png";
  } else if (dealt[1] == 6) {
    document.getElementById("card2").src = "images/6.png";
  } else if (dealt[1] == 7) {
    document.getElementById("card2").src = "images/7.png";
  } else if (dealt[1] == 8) {
    document.getElementById("card2").src = "images/8.png";
  } else if (dealt[1] == 9) {
    document.getElementById("card2").src = "images/9.png";
  } else if (dealt[1] == 10) {
    document.getElementById("card2").src = "images/10.png";
  } else if (dealt[1] == 11) {
    document.getElementById("card2").src = "images/ace.png";
  }
  if (dealt[2] == 1) {
    document.getElementById("card3").src = "images/ace.png";
  } else if (dealt[2] == 2) {
    document.getElementById("card3").src = "images/2.png";
  } else if (dealt[2] == 3) {
    document.getElementById("card3").src = "images/3.png";
  } else if (dealt[2] == 4) {
    document.getElementById("card3").src = "images/4.png";
  } else if (dealt[2] == 5) {
    document.getElementById("card3").src = "images/5.png";
  } else if (dealt[2] == 6) {
    document.getElementById("card3").src = "images/6.png";
  } else if (dealt[2] == 7) {
    document.getElementById("card3").src = "images/7.png";
  } else if (dealt[2] == 8) {
    document.getElementById("card3").src = "images/8.png";
  } else if (dealt[2] == 9) {
    document.getElementById("card3").src = "images/9.png";
  } else if (dealt[2] == 10) {
    document.getElementById("card3").src = "images/10.png";
  } else if (dealt[2] == 11) {
    document.getElementById("card3").src = "images/ace.png";
  }
  if (dealt[3] == 1) {
    document.getElementById("card4").src = "images/ace.png";
  } else if (dealt[3] == 2) {
    document.getElementById("card4").src = "images/2.png";
  } else if (dealt[3] == 3) {
    document.getElementById("card4").src = "images/3.png";
  } else if (dealt[3] == 4) {
    document.getElementById("card4").src = "images/4.png";
  } else if (dealt[3] == 5) {
    document.getElementById("card4").src = "images/5.png";
  } else if (dealt[3] == 6) {
    document.getElementById("card4").src = "images/6.png";
  } else if (dealt[3] == 7) {
    document.getElementById("card4").src = "images/7.png";
  } else if (dealt[3] == 8) {
    document.getElementById("card4").src = "images/8.png";
  } else if (dealt[3] == 9) {
    document.getElementById("card4").src = "images/9.png";
  } else if (dealt[3] == 10) {
    document.getElementById("card4").src = "images/10.png";
  } else if (dealt[3] == 11) {
    document.getElementById("card4").src = "images/ace.png";
  }
  if (dealt[4] == 1) {
    document.getElementById("card5").src = "images/ace.png";
  } else if (dealt[4] == 2) {
    document.getElementById("card5").src = "images/2.png";
  } else if (dealt[4] == 3) {
    document.getElementById("card5").src = "images/3.png";
  } else if (dealt[4] == 4) {
    document.getElementById("card5").src = "images/4.png";
  } else if (dealt[4] == 5) {
    document.getElementById("card5").src = "images/5.png";
  } else if (dealt[4] == 6) {
    document.getElementById("card5").src = "images/6.png";
  } else if (dealt[4] == 7) {
    document.getElementById("card5").src = "images/7.png";
  } else if (dealt[4] == 8) {
    document.getElementById("card5").src = "images/8.png";
  } else if (dealt[4] == 9) {
    document.getElementById("card5").src = "images/9.png";
  } else if (dealt[4] == 10) {
    document.getElementById("card5").src = "images/10.png";
  } else if (dealt[4] == 11) {
    document.getElementById("card5").src = "images/ace.png";
  }
  if (dealt[5] == 1) {
    document.getElementById("card6").src = "images/ace.png";
  } else if (dealt[5] == 2) {
    document.getElementById("card6").src = "images/2.png";
  } else if (dealt[5] == 3) {
    document.getElementById("card6").src = "images/3.png";
  } else if (dealt[5] == 4) {
    document.getElementById("card6").src = "images/4.png";
  } else if (dealt[5] == 5) {
    document.getElementById("card6").src = "images/5.png";
  } else if (dealt[5] == 6) {
    document.getElementById("card6").src = "images/6.png";
  } else if (dealt[5] == 7) {
    document.getElementById("card6").src = "images/7.png";
  } else if (dealt[5] == 8) {
    document.getElementById("card6").src = "images/8.png";
  } else if (dealt[5] == 9) {
    document.getElementById("card6").src = "images/9.png";
  } else if (dealt[5] == 10) {
    document.getElementById("card6").src = "images/10.png";
  } else if (dealt[5] == 11) {
    document.getElementById("card6").src = "images/ace.png";
  }
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
    money -= gamble;
    document.getElementById("money").innerHTML = "Money: " + money;
  }
}


//locks in total as long as score is <=21//
//checks to see if you won, lost, or tied the dealer//
function stay() {
  if (score == 21) {
    alert("BlackJack! You win!");
    wins++;
    money += gamble;
    document.getElementById("money").innerHTML = "Money: " + money;
  } else if (score <= 21 && score > dealerScore) {
    alert("congratulations, you've won with a total of: " + score + ". The dealer had a score of: " + dealerScore);
    document.getElementById("hitBtn").onclick = "";
    document.getElementById("stayBtn").onclick = "";
    wins++;
    document.getElementById("wins").innerHTML = wins;
    money += gamble;
    document.getElementById("money").innerHTML = "Money: " + money;
  } else if (score <= 21 && score < dealerScore) {
    alert("Loser, you've lost with a total of: " + score + ". The dealer had a score of: " + dealerScore);
    loses++;
    document.getElementById("loses").innerHTML = loses;
    document.getElementById("hitBtn").onclick = "";
    document.getElementById("stayBtn").onclick = "";
    money -= gamble;
    document.getElementById("money").innerHTML = "Money: " + money;
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


//check to see if player is eligable to bet and play
function monCheck() {
  if (money == 0) {
  alert("Game Over, out of money!");
  document.getElementById("dealBtn").onclick = "";
  document.getElementById("hitBtn").onclick = "";
  document.getElementById("stayBtn").onclick = "";
  document.getElementById("resetBtn").onclick = "";
  } 
}

//starts a new round for the player
function reset() {
  score = 0;
  dealt.length = 0;
  document.getElementById("yourCards").innerHTML = "";
  document.getElementById("totals").innerHTML = "";
  document.getElementById("dealBtn").onclick = deal;
  document.getElementById("hitBtn").onclick = hit;
  document.getElementById("stayBtn").onclick = stay;
  document.getElementById("card1").src = "";
  document.getElementById("card2").src = "";
  document.getElementById("card3").src = "";
  document.getElementById("card4").src = "";
  document.getElementById("card5").src = "";
  document.getElementById("card6").src = "";
  dealerCard1 = "";
  dealerCard2 = "";
  dealerCard3 = "";
  dealerCard4 = "";
  monCheck();
}

//places card img in slot after deal




