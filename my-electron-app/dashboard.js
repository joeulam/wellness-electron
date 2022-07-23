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