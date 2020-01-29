// remember to change all the var into let after finishing this code

//make cards random 
function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

var deck =
{
    cardArray: [],
    load: function(){
        var deckSuit = 1;
        var deckRank = 2;
        
        for(deckSuit = 1; deckSuit < 5; deckSuit++)
        {
            for(deckRank = 2; deckRank < 15; deckRank++)
            {
                this.cardArray.push(new Card(deckSuit, deckRank));
            }
        }
        shuffle(this.cardArray);
    }
}


