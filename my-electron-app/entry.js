const moment = require('moment');

var entryc = document.getElementById("Entry");
entryc.addEventListener("click",entrychange);

function entrychange()
      {
        window.location = "entry.html";
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
document.addEventListener("DOMContentLoaded", load())





//---------------------------------------SQL QUERYS---------------------------------------//
function load(){
  var pg = require('pg');

  let usernameg = localStorage.getItem("userg");
  let conp = localStorage.getItem("passg");
  var gconn = new pg.Client("postgres://"+usernameg+":"+conp+"@74.68.42.21:5432/heyo_scale");
  gconn.connect(function(err){
    sql = "SELECT * FROM public."+ usernameg+"";
    gconn.query(sql,function(err,result){
      if(err){
        console.log(err)

      }
      else{
        var row1 = result.rows[0]
        console.log(row1)
        var date = JSON.stringify(result.rows[0].timestamp);
        var text = JSON.stringify(result.rows[0].diary);
        text = JSON.parse(text)
        var moodint = JSON.stringify(result.rows[0].moodrating);
        console.log(date)

        date = moment(date).format('LLLL')
        document.getElementById("mood").innerText = moodint;
        document.getElementById("entry").innerText = text;
        console.log(date)
        console.log(text)
        console.log(moodint)

      }

    })//First query
  })//connection
}
          