let userArray = [];


// define a constructor to create player objects
var PlayerObject = function (pPlayerID, pName) {
  this.PlayerID = pPlayerID;
  this.PlayerName = pName;
}

document.addEventListener("DOMContentLoaded", function () {
 let btnLogin =  document.getElementById("buttonLogin");
  
 
 btnLogin.addEventListener("click",function(){
    userArray.push(new PlayerObject(document.getElementById("firstName").value,document.getElementById("phone").value));
  });


player0 = new PlayerObject("Lauren","206-011-3113");
player1 = new PlayerObject("Kelly","213-353-2347");
player2 = new PlayerObject("Billy","425-301-9487");

userArray.push(player0);
userArray.push(player1);
userArray.push(player2);

console.log(userArray);

$(document).on("pagebeforeshow", "#page2", function (event) {   // have to use jQuery 
 // document.getElementById("IDparmHere").innerHTML = "";
  createList();
});

});

document.getElementById("phone").addEventListener("click", function () {
  createList();
  document.location.href = "index.html#page2";
});

function createList()
{
  // clear prior data
  var divUserlist = document.getElementById("divUserlist");
  while (divUserlist.firstChild) {    // remove any old data so don't get duplicates
      divUserlist.removeChild(divUserlist.firstChild);
  };

  var ul = document.createElement('ul');  
  userArray.forEach(function (element,) {   // use handy array forEach method
    var li = document.createElement('li');
    li.innerHTML = "<a data-transition='pop' class='onePlayer' data-parm=" + element.PlayerID + "  data-parm2=" + element.PlayerName + " href='#page3'>Jump </a> " +element.PlayerID + "  "+  element.PlayerName;
    ul.appendChild(li);
  });
  divUserlist.appendChild(ul)

    // set up an event for each new li item, if user clicks any, it writes >>that<< items data-parm into the hidden html 
    var classname = document.getElementsByClassName("onePlayer");
    Array.from(classname).forEach(function (element) {
        element.addEventListener('click', function(){
          var parm = this.getAttribute("data-parm");  // passing in the record.ID
          console.log(parm);
          //do something here with parameter on  pickbet page
          document.getElementById("IDparmHere").innerHTML = parm;
          document.location.href = "index.html#page3";

            var parm2 = this.getAttribute("data-parm2");  // passing in the record.playername
            console.log(parm2);
            //do something here with parameter on  pickbet page
            document.getElementById("phoneHere").innerHTML = parm2;
            document.location.href = "index.html#page3";


      });
    });
    

  } ;

 
