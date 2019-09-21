

    
//Create variables for wins, losses, guesses, and guess counter//

var wins = 0;
var losses = 0;
var guessesleft = 9;
var counter = 0;
var computerguess = "";
var char_list = "abcdefghijklmnopqrstuvwxyz";

//Create variables that will go to areas in the paragraph
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesText = document.getElementById("guesses-text");
var guessesTotalText = document.getElementById("guesses-total-text");
var guessArray = [];




 
 //Whenever the user presses a key enter game       

document.onkeyup = function(event) {
    userGuess = event.key;
    computerguess = char_list.charAt(Math.floor(Math.random() * char_list.length));
    
            if (userGuess === computerguess) {
                wins++;
            }
            else losses++;
            counter++;
            guessesleft -= 1;
            guessArray.push(userGuess);


        
        winsText.textContent = "Wins: " + wins;
        lossesText.textContent = "Losses: " + losses;
        guessesText.textContent =  "Guesses Left:" + guessesleft;
        guessesTotalText.textContent = "Your Guesses so  far:" + guessArray;
    
    if (guessesleft === 0){
        wins = 0;
        losses = 0;
        guessesleft = 9;
        guessArray = [];

    }
    
   
    }

        
       
    



