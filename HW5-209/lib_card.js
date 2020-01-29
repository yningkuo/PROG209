
//create a nested loop
//1. random number generator to assign 26 card to PLAYER
//How to not overlap?? create an "in-use" property, set to false. Set to "True " after used. 
//Display each card and decide which one win/lose.
// you have to include the suit to decide win/lose each round!
// create a constructor first

function Card(suit, rank) {
    this.suit = suit;
    this.rank = rank;
}
//------- player part Start--------------
function checkRank(rank){
    var playerRankText = document.getElementById("playerScoreRank");
    
    if(rank === 14){
        playerRankText.innerHTML = "ACE";

    }else if(rank === 13){
        playerRankText.innerHTML = "KING";

    }else if(rank === 12){
        playerRankText.innerHTML = "QUEEN";
    }else if(rank === 11){
        playerRankText.innerHTML = "JACK";     
    }else{
        playerRankText.innerHTML = playerArray[i].rank;
    }

}

function cardColorPlayer(suit,rank)
{
    var playerSuitText = document.getElementById("playerScoreSuit");
    
    if(suit === 4){
        playerScoreSuit.style.color = "black";
        playerSuitText.innerHTML = "SPADE";
        checkRank(rank);
        playerScoreRank.style.color = "black";
        
    }
    else if(suit === 3){
        playerScoreSuit.style.color = "red";
        playerSuitText.innerHTML = "HEART";
        checkRank(rank);
        playerScoreRank.style.color = "red";
        
    }
    else if(suit === 2){
        playerScoreSuit.style.color = "red";
        playerSuitText.innerHTML = "DIAMOND";
        checkRank(rank);
        playerScoreRank.style.color = "red";
        
    }
    else if(suit === 1){
        playerScoreSuit.style.color = "black";
        playerSuitText.innerHTML = "CLUB";
        checkRank(rank);
        playerScoreRank.style.color = "black";
        
    }  
}
//------- player part END--------------
//------- Computer part Start--------------
function checkRankCom(rank){
    var comRankText = document.getElementById("computerScoreRank");
    
    if(rank === 14){
        comRankText.innerHTML = "ACE";

    }else if(rank === 13){
        comRankText.innerHTML = "KING";

    }else if(rank === 12){
        comRankText.innerHTML = "QUEEN";
    }else if(rank === 11){
        comRankText.innerHTML = "JACK";     
    }else{
        comRankText.innerHTML = computerArray[i].rank;
    }

}

function cardColorCom(suit,rank)
{
    var comSuitText = document.getElementById("computerScoreSuit");
    
    if(suit === 4){
        computerScoreSuit.style.color = "black";
        comSuitText.innerHTML = "SPADE";
        checkRankCom(rank);
        computerScoreRank.style.color = "black";
        
    }
    else if(suit === 3){
        computerScoreSuit.style.color = "red";
        comSuitText.innerHTML = "HEART";
        checkRankCom(rank);
        computerScoreRank.style.color = "red";
        
    }
    else if(suit === 2){
        computerScoreSuit.style.color = "red";
        comSuitText.innerHTML = "DIAMOND";
        checkRankCom(rank);
        computerScoreRank.style.color = "red";
        
    }
    else if(suit === 1){
        computerScoreSuit.style.color = "black";
        comSuitText.innerHTML = "CLUB";
        checkRankCom(rank);
        computerScoreRank.style.color = "black";
        
    }  
}
//------- Computer part END--------------