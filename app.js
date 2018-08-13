/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, dice;

scores = [0,0];
roundScore = 0;
activePlayer = 1;


//document.querySelector('#current-' + activePlayer).textContent = dice;  //because of type coercion, we get 'current-0' as the query selector.

//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';//must be a string for html, so it doesn't think it's javascript


document.querySelector('.dice').style.display = 'none'; //grabs the CSS and sets the property of it.

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';   //could use querySelector, but used getElementById instead. 
document.getElementById('current-1').textContent = '0';




document.querySelector('.btn-roll').addEventListener('click', function() {  //using an anymous function

	//1. Randon number
	var dice = Math.floor(Math.random() * 6) + 1;  //because setting var dice here, only this function has acces to 'dice variable'

	//2. Display the result
	var diceDOM = document.querySelector('.dice');
	diceDOM.style.display = 'block';
	diceDOM.src = 'dice-' + dice + '.png';

	//3. Update the round score IF the rolled number was not a 1

});

































