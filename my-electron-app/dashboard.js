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

window.onload=function(){
  document.getElementById("heyobg").click();
};

var sidebaro = document.getElementById("heyo");
var sidebaros = document.getElementById("heyobg");
sidebaros.addEventListener("click",sidebar);
sidebaro.addEventListener("click",sidebar);

var shopt = document.getElementById("shop");
shopt.addEventListener("click",shop);

function shop(){
  window.location = "shop.html";
}


var a = 0;
function sidebar()
{
  if(a%2==0)
  {
    var elems = document.getElementsByClassName('choices');
    for (var i=0;i<elems.length;i+=1){
    elems[i].style.display = 'block';
    document.getElementsByClassName('sidebar')[i].style.background = "#B07D62";
    }
    a++;
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

//functions//
function responseget()
        {
          var pg = require('pg');
          let usernameg = localStorage.getItem("userg");
          let conp = localStorage.getItem("passg");
          var gconn = new pg.Client("postgres://"+usernameg+":"+conp+"@74.68.42.21:5432/heyo_scale");
          gconn.connect(function (err){
            sql = "SELECT diary FROM public."+usernameg+" t1 where not exists(select timestamp,diary from public."+usernameg+" t2 where (t1.timestamp < t2.timestamp AND NOT t2.diary = ''))";
            gconn.query(sql, function (err, result) {
              console.log(result.rows)
              var a = JSON.stringify(result.rows[0].diary);
              var responsetxt =JSON.parse(a);
              console.log(responsetxt)
              document.getElementById("lastresponse").innerText = responsetxt;
            })
          })//connection 

        };//response get

var entryc = document.getElementById("Entry");
entryc.addEventListener("click",entrychange);

function entrychange()
      {
        window.location = "entry.html";
      }
