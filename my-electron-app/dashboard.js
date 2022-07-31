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
sidebaro.addEventListener("click",side);

function side()
{
  sidebar();
}

function sidebar()
{
  document.getElementsByClassName("choices").style.display = "none";
}

function sidebarclose()
{

}