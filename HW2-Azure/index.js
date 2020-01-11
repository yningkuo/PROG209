var btn = document.getElementById("btn");

btn.addEventListener("click",luckyOrNot);

function luckyOrNot(){ 

    var number = Math.floor(Math.random()*3);

    if(number === 0){
        document.getElementById("info").innerHTML="Yes! Take action and your dream will come true!";
    }
    else if(number === 1){
        document.getElementById("info").innerHTML="Maybe if you are in luck.";
    }
    else {
        document.getElementById("info").innerHTML="NO!!!!";
    }

};
