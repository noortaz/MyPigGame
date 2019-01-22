var scores, roundScore, activePlayer, gamePlaying;
newGame();
var lastDice;

document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gamePlaying) {
    //1. RANDOM NUMBER
    var dice1 = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;
    
    //2. DISPLAY THE RESULT
    document.getElementById('dice-1').style.display = 'block';
    document.getElementById('dice-2').style.display = 'block';
    
    document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
    document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';

    //3. UPDATE THE ROUND SCORE IF THE ROLLED NUMBER WAS NOT A 1
    /*
        if (dice === 6 && lastDice === 6) {
        //player looses score
        scores[activePlayer] = 0;
        document.querySelector('#score-' + activePlayer).textContent = 0;
        nextPlayer();
        }
        */
        
     if (dice1 !== 1 && dice2 !== 1) {
        //add score
        roundScore += dice1 + dice2;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        nextPlayer();
    }
    //lastDice = dice;

  }
});


document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {
    //ADD CURRENT SCORE
    scores[activePlayer] += roundScore;
    
    //UPDATE THE UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    
    var input = document.querySelector('.final-score').value;
    var winningScore;   
        
     //CHECK IF PLAYER WON THE GAME 
        if (input) {
            winningScore = input;
        } else {
            winningScore = 100;
        };
    if (scores[activePlayer] >= winningScore) {
        gamePlaying = false;
        var diceDOM = document.querySelector('.dice');

        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    } else {
    
    //NEXT PLAYER
    nextPlayer();
    }
    
}})

function nextPlayer() {

        //next player
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
        
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        
       // document.querySelector('.player-0-panel').classList.remove('active');
       // document.querySelector('.player-1-panel').classList.add('active');
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
};



document.querySelector('.btn-new').addEventListener('click', newGame);


function newGame() {
scores = [0, 0];
roundScore = 0;
activePlayer = 0;
gamePlaying = true;

    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';

document.getElementById("score-0").textContent = '0';
document.getElementById("score-1").textContent = '0';
document.getElementById("current-0").textContent = '0';
document.getElementById("current-1").textContent = '0';
document.getElementById("name-0").textContent = 'Player 1';
document.getElementById("name-1").textContent = 'player 2';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');

};




 