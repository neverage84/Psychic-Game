

    
//Create variables for wins, losses, guesses, and guess counter//

var wins = 0;
var losses = 0;
var guessesleft = 9;
var counter = 0;
var computerguess = "";
var char_list = "abcdefghijklmnopqrstuvwxyz";
var guessArray = [];




 
 //Whenever the user presses a key enter game       

document.onkeyup = function(event) {
    userGuess = event.key;
    if (guessesleft === 9) {
        computerguess = char_list.charAt(Math.floor(Math.random() * char_list.length));
        
    }
    
            if (userGuess === computerguess) {
                wins++;
                guessesleft = 9;
                guessArray = [];
            }
            else {
            counter++;
            guessesleft --;
            guessArray.push(userGuess);
            }

        
        document.querySelector("#wins-text").innerHTML = "Wins: " + wins;
        document.querySelector("#losses-text").innerHTML = "Losses: " + losses;
        document.querySelector("#guesses-text").innerHTML = "Guesses Left:" + guessesleft;
        document.querySelector("#guesses-total-text").innerHTML = "Your Guesses so far:" + guessArray;
    
    if (guessesleft === 0){
        losses++;
        guessesleft = 9;
        guessArray = [];
       

    }
    
   
    }

        
       
    



