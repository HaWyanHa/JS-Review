/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/



var scores, roundScore, activePlayer, dice, gamePlaying, diceRoll, diceRoll1, diceRoll2, winScore;
gamePlaying = true;
init();
diceRoll = true; //first roll is set to true
console.log(diceRoll);



document.querySelector('.btn-roll').addEventListener('click', function() {  //using an anymous function
	if(gamePlaying) {

		
		//1. Randon number
		var dice = Math.floor(Math.random() * 6) + 1;  //because setting var dice here, only this function has acces to 'dice variable'

		if (diceRoll) {
			diceRoll1 = dice;
		} else {
			diceRoll2 = dice;
		}
		console.log(diceRoll1, diceRoll2);

		//2. Display the result
		var diceDOM = document.querySelector('.dice');
		diceDOM.style.display = 'block';
		diceDOM.src = 'dice-' + dice + '.png';

		//3. Update the round score IF the rolled number was not a 1
		if (dice !== 1) {
			//add score
			roundScore += dice; //roundScore = roundScore + dice
			document.querySelector('#current-' + activePlayer).textContent = roundScore;
		} else {
			//next player
			nextPlayer();
		}

		if (diceRoll1 === 6 && diceRoll2 ===6){
			nextPlayer();
		}

		diceRoll = !diceRoll;
		console.log(diceRoll);
	}
});

document.querySelector('.btn-hold').addEventListener('click', function(){
	if(gamePlaying) {
		//add current score to player's global score
		scores[activePlayer] += roundScore; //scores[activePlayer] = scores[activePlayer] + roundScore; 
		// update UI 
		document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
		

		//check if player won the game
		if (scores[activePlayer] >= winScore){
			document.getElementById('name-' + activePlayer).textContent = 'Winner';
			document.querySelector('.dice').style.display = 'none';
			document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
			document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
			gamePlaying = false;
		} else {
			nextPlayer();
			}
	}
});

document.querySelector('.btn-new').addEventListener('click', init);

function init(){
	scores = [0,0];
	roundScore = 0;
	activePlayer = 0;
	gamePlaying = true;

	//document.querySelector('#current-' + activePlayer).textContent = dice;  //because of type coercion, we get 'current-0' as the query selector.
	//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';//must be a string for html, so it doesn't think it's javascript


	document.querySelector('#name-0').textContent = 'Player 1';
	document.querySelector('#name-1').textContent = 'Player 2';
	document.querySelector('.dice').style.display = 'none'; //grabs the CSS and sets the property of it.
	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');
	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-1-panel').classList.remove('active');
	document.querySelector('.player-0-panel').classList.add('active');


	document.getElementById('score-0').textContent = '0';
	document.getElementById('score-1').textContent = '0';
	document.getElementById('current-0').textContent = '0';   //could use querySelector, but used getElementById instead. 
	document.getElementById('current-1').textContent = '0';
}

function nextPlayer() {
	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
			/* if(activePlayer === 0) {
				activePlayer = 1;
			} else {
				activePlayer = 0;
			} */
		roundScore = 0;

		document.getElementById('current-0').textContent = '0';
		document.getElementById('current-1').textContent = '0';

		//document.querySelector('.player-0-panel').classList.remove('active');
		//document.querySelector('.player-1-panel').classList.add('active');  //could make it an IF/ELSE statement
		document.querySelector('.player-0-panel').classList.toggle('active');
		document.querySelector('.player-1-panel').classList.toggle('active');
	
		document.querySelector('.dice').style.display = 'none';
}





















