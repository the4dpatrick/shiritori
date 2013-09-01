var game = new Game();

function init() {
	game.init();
}

function Game() {
	
	//load dictionary
	var dictionary = {
		"あ": {
			”あひる”: {
				meaning: "Duck",
				kanji: "家鴨",
				sentenceJP: "アヒルに似てるの。",
				sentenceEN: "It looks like a duck."
			},
			”あなた”: {
				meaning: "You",
				kanji: "貴方",
				sentenceJP: "あなたのお名前は？",
				sentenceEN: "What's your name?"
			}
		}
		"い":
		"う":
		"え":
		"お":
		"か":
		"き":
		"く":
		"け":
		"こ":
		"さ":
		"し":
		"す":
		"せ":
		"そ":
		"た":
		"ち":
		"つ":
		"て":
		"と":
		"な":
		"に":
		"ぬ":
		"ね":
		"の":
		"は":
		"ひ":
		"ふ":
		"へ":
		"ほ":
		"ま":
		"み":
		"む":
		"め":
		"も":
		"や":
		"ゆ":
		"よ":
		"ら":
		"り":
		"る":
		"れ":
		"ろ":
		"わ":
		"を":
		"ア":
		"イ":
		"ウ":
		"エ":
		"オ":
		"カ":
		"キ":
		"ク":
		"ケ":
		"コ":
		"サ":
		"シ":
		"ス":
		"セ":
		"ソ":
		"タ":
		"チ":
		"ツ":
		"テ":
		"ト":
		"ナ":
		"ニ":
		"ヌ":
		"ネ":
		"ノ":
		"ハ":
		"ヒ":
		"フ":
		"ヘ":
		"ホ":
		"サ":
		"シ":
		"ス":
		"セ":
		"ソ":
		"タ":
		"チ":
		"ツ":
		"テ":
		"ト":
		"マ":
		"ミ":
		"ム":
		"メ":
		"モ":
		"ヤ":
		"ユ":
		"ヨ":
		"ラ":
		"リ":
		"ル":
		"レ":
		"ロ":
		"ワ":
		"ヲ":
	};
	
	//Define two arrays for user and PC played words
	var userPlayed = [];
	var pcPlayed = [];
	
	//define function to find last character in word
	var function findLastChar(word) {
		return word.charAt(word.length - 1);
	}
	
	//define function to find first character in word
	var function findFirstChar(word) {
		return word.charAt(0);
	}
	
	var userWord;
	var pcWord;
	

	
	/***
	* Create a boolean for if the user's word starts with the last character of the PC's word
	* Check if the word is in the dictionary
	* Check if the word has been played by either the user or the PC
	***/
	var function validWord(pcEnteredWord, userEnteredWord) {
		// Make a default so there doesn't need to be two variables
		//possibily change the findLastChar(word1) with default value of findLastChar(pcWord)
		if (findLastChar(pcEnteredWord) == findFirstChar(userEnteredWord)) { 
			if (userEnteredWord in dictionary) {
				if (userPlayed.indexOf(userEnteredWord) == -1 || pcPlayed.indexOf(userEnteredWord) == -1) {
					return true;
				}
			}
		}
		else {
			return false;
		}
	}
	
	this.init = function() {
		pcWord = 'しりとり';
		         
		//prompt the user to play a word
		var userWord = prompt(pcWord + '!');
						
		//find the last character of the inputted word
		var userLast = findLastChar(userWord);

		//find last character of computer played word
		var pcLast = findLastChar(pcWord);

		//if lost, alert you lose
		if(lastChar == 'ん'); {
			alert('You played a word ending in ん, you lost!');
			game.gameOver(); //game over
		}
		//check if the pcLast is equal to the userFirst
		else if (validWord(pcWord, userWord)) {	   
			//if valid, randomly choose a a word that starts with the lastChar
			//check if the word has been played
			//add to a played array
			//set the word played to true
			//print the word
			//print the definition
			//prompt user to give another word
		}
		else {
			//another word
			prompt("Choose another word")
		}
	};
	
	this.restart {};
	this.gameOver = function() {};
}


