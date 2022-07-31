var mood = document.getElementById("moods");
mood.addEventListener("click",scales);


function scales(){
    moodtr();
    document.getElementById("moods").style.color = "blue";
  }

function moodtr()
{
  window.location = "mood.html";
}

var sidebaro = document.getElementById("heyo");
var sidebaros = document.getElementById("heyobg");
sidebaros.addEventListener("click",sidebar);
sidebaro.addEventListener("click",sidebar);


var a = 0;
function sidebar()
{
  if(a%2==0)
  {
    a++;
    var elems = document.getElementsByClassName('choices');
    for (var i=0;i<elems.length;i+=1){
    elems[i].style.display = 'block';
    document.getElementsByClassName('sidebar')[i].style.background = "#B07D62";
    }
  }
  else{
    sidebarclose()
    a++;
  }

}


function sidebarclose()
{
  var elems = document.getElementsByClassName('choices');
  for (var i=0;i<elems.length;i+=1){
  elems[i].style.display = 'none';
  document.getElementsByClassName('sidebar')[i].style.background = "#f6f4d2";

  }
}