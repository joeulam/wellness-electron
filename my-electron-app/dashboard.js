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
  document.getElementsByClassName('sidebar')[i].style.background = "#EBD4AB";

  }
}

var style = document.getElementById("theme")
style.addEventListener("click",change)
var b = 0;
function change(){

  if(b%2==0)
  {
    b++;
    document.getElementById("pagestyle").setAttribute("href", "./dashboard2.css");
  }
  else{
    b++;
    document.getElementById("pagestyle").setAttribute("href", "./dashboard.css");

  }
}

var sdash = document.getElementById("dash")
sdash.addEventListener("click",dash)
function dash(){
  window.location = "dashboard.html";

}

var stodo = document.getElementById("todo")
stodo.addEventListener("click",todo)
function todo(){
  window.location = "task.html";

}