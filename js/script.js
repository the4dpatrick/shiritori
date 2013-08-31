var game = new Game();

function init() {
	game.init();
}

function Game() {
	
	//load dictionary
	var dictionary = {char: words};
	words = {meaning, sentence, played};
	
	//define function to find last character in word
	var function findLastChar(word) {
		return word.charAt(word.length - 1);
	}
	
	//define function to find first character in word
	var function findFirstChar(word) {
		return word.charAt(0);
	}
	this.init = function() {
		var userWord;
		var pcWord = 'しりとり';
         
		//prompt the user to play a word
		var userWord = prompt(pcWord + '!');
						
		//find the last character of the inputted word
		var userLast = findLastChar(userWord);

		//find last character of computer played word
		var pcLast = findLastChar(pcWord);

		//if lost, alert you lose
		if(lastChar == 'ん'); {
			alert('You played a word ending in ん');
		  game = false; //game over
		}
		//check if the pcLast is equal to the userFirst
		else if (pcLast == userFirst) {
		     }
		    //check if word has not been played
		    if(dictionary[userWord][played]) {
		        //get another word from user
		    } 
		    //check if the word is in the dictionary
		    else if(!dictionary[userWord]) {
		        //get another word from user
		    }
			else {
				//if valid, randomly choose a a word that starts with the lastChar
				//check if the word has been played
				//add to a played array
				//set the word played to true
				//print the word
				//print the definition
				//prompt user to give another word
			}
		}
		else {
		//another word
		}
	};
	
	this.restart {};
	this.gameOver = function() {};
}


