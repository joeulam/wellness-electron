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
var shopt = document.getElementById("shop");
shopt.addEventListener("click",shop);

function shop(){
  window.location = "shop.html";
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
  const parse = require('postgres-date')
  gconn.connect(function(err){
    sql = "SELECT * FROM public."+ usernameg+"";
    gconn.query(sql,function(err,result){
      if(err){
        console.log(err)

      }
      else{
        for(var i = 0; i < result.rows.length;i++){
          var div = document.createElement('div');
          document.getElementById("entryborder").appendChild(div);
          div.id = "scroll"+i
          div.className = "scroll"

          var date = JSON.stringify(result.rows[i].date);
          date = JSON.parse(date)
          var datetime = JSON.stringify(result.rows[i].datetime)
          datetime = JSON.parse(datetime)
          date = date.substring(0,date.lastIndexOf('T'))
        console.log(date)
        date = date+" "+datetime;
        console.log(date);
        date = moment(date).format('LLLL')


            var dates = document.createElement('h1');
            document.getElementById("scroll"+i).appendChild(dates)
            dates.id = "date"+i
            document.getElementById("date"+i).innerText = date;


            var mood = document.createElement('h2')
            document.getElementById("scroll"+i).appendChild(mood)
            mood.id = "mood"+i
            var moodint = JSON.stringify(result.rows[i].moodrating);
            document.getElementById("mood"+i).innerText = "Mood: "+moodint;


            var entry = document.createElement('p')
            document.getElementById('scroll'+i).appendChild(entry)
            entry.id = "entry"+i
            var text = JSON.stringify(result.rows[i].diary);
            text = JSON.parse(text)
            document.getElementById("entry"+i).innerText = "Entry: "+ text;

          

        }


        

        
        
        

        console.log(date)
        console.log(text)
        console.log(moodint)

      }

    })//First query
  })//connection
}
          