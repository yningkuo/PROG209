let playerArray =[26];
let computerArray =[26];

let i = 0;
let playerCount =0;
let computerCount =0;
let playerScore = 0;
let computerScore = 0;
document.getElementById("dealbtn").addEventListener("click", function()
{
    deck.load();
    playerArray[i] = deck.cardArray[i];
    computerArray[i] =deck.cardArray[51-i];
    cardColorPlayer(playerArray[i].suit, playerArray[i].rank);
    cardColorCom(computerArray[i].suit, computerArray[i].rank);
    
    setScore(playerArray[i].suit, playerArray[i].rank,computerArray[i].suit, computerArray[i].rank);
            //document.getElementById("playerScoreSuit").innerHTML = playerArray[0].suit;
            //document.getElementById("playerScoreRank").innerHTML = playerArray[0].rank; 
            //document.getElementById("computerScoreSuit").innerHTML = computerArray[0].suit;
            //document.getElementById("computerScoreRank").innerHTML = computerArray[0].rank;
    i++;
    document.getElementById("totalCount").innerHTML = i;
    document.getElementById("playerTotalScore").innerHTML = playerScore;
    document.getElementById("computerTotalScore").innerHTML = computerScore;
    this.style.display = "none";

});



    document.getElementById("nextbtn").addEventListener("click", function()
    {
        //every time the next btn is clicked, && i < 26
        if(i < 26)
        {  
            
            //player Score if loop
            playerArray[i] = deck.cardArray[i];
            computerArray[i] =deck.cardArray[51-i];
                
            //showing the player's rank & suit
                cardColorPlayer(playerArray[i].suit, playerArray[i].rank);
                cardColorCom(computerArray[i].suit, computerArray[i].rank);
                    //document.getElementById("playerScoreSuit").innerHTML = playerArray[i].suit;
                    //document.getElementById("playerScoreRank").innerHTML = playerArray[i].rank; 
                    //document.getElementById("computerScoreSuit").innerHTML = computerArray[i].suit;
                    //document.getElementById("computerScoreRank").innerHTML = computerArray[i].rank;
                    setScore(playerArray[i].suit, playerArray[i].rank, computerArray[i].suit, computerArray[i].rank);
             i++;
        
            //showing the player& computer score on the screen
            document.getElementById("totalCount").innerHTML = i;
            document.getElementById("playerTotalScore").innerHTML = playerScore;
            document.getElementById("computerTotalScore").innerHTML = computerScore;
        
        }   
        //showing the text to see who wins on the screen
        if(i === 26)
    {
            if(playerScore > computerScore)
            {
                document.getElementById("finalMsg").innerHTML = 'GAME OVER. Congrats, you win this game!';
            }
            else if(playerScore < computerScore)
            {
                document.getElementById("finalMsg").innerHTML = 'GAME OVER, you lose!';
            }
            else if(playerScore = computerScore)
            {
                document.getElementById("finalMsg").innerHTML = 'GAME OVER, tie!';
            }
    }
        if(i > 26){
            return;
        }
        
    });
    
    function setScore(playerArraySuit, playerArrayRank,computerArraySuit, computerArrayRank)
    {               
        if(playerArrayRank > computerArrayRank )
        {                   document.getElementById("finalMsg").innerHTML = 'You won this hand';
                            playerScore++;
            }
                else if(playerArrayRank < computerArrayRank)
                {           document.getElementById("finalMsg").innerHTML = 'You lost this hand';
                            computerScore++;
                    }
                else if(playerArrayRank = computerArrayRank)
                {
                            if(playerArraySuit > computerArraySuit){
                                    document.getElementById("finalMsg").innerHTML = 'You won this hand';
                                    playerScore++;
                                }
                                else if(playerArraySuit > computerArraySuit){
                                    document.getElementById("finalMsg").innerHTML = 'You lost this hand';
                                      computerScore++;
                                }
                }
    }