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


var sub = document.getElementById("submit")
sub.addEventListener("click",send)
//---------------------------------------SQL QUERYS---------------------------------------//
function send(){
  var text = document.getElementById("text").value;
  var pg = require('pg');
 
  let usernameg = localStorage.getItem("userg");
  let conp = localStorage.getItem("passg");
  var gconn = new pg.Client("postgres://"+usernameg+":"+conp+"@74.68.42.21:5432/todo");
  gconn.connect(function(err){
    sql = "INSERT INTO public."+usernameg+"(todo) VALUES ('"+text+"')"
    gconn.query(sql,function(err,result){
      if(err){
        console.log(err)
      }
      else{
        console.log("To do inserted")
        document.getElementById("text").value = ''
        load()
      }
    })
  })



}

document.addEventListener("DOMContentLoaded", load())

function load(){
  var pg = require('pg');

  let usernameg = localStorage.getItem("userg");
  let conp = localStorage.getItem("passg");
  var gconn = new pg.Client("postgres://"+usernameg+":"+conp+"@74.68.42.21:5432/todo");
  gconn.connect(function(err){
    sql = "SELECT * FROM public."+usernameg
    gconn.query(sql,function(err,result){
      if(err){
        console.log(err)
      }
      else{
        for(var i = 0; i < result.rows.length;i++)
        {
          var div = document.createElement('div');
          document.getElementById("list").appendChild(div);
          div.id = "todo"+i
          div.className = "todoc"
          var checkbox = document.createElement('input');
          document.getElementById('todo'+i).appendChild(checkbox);
          checkbox.className = "checkbox-round"
          checkbox.type ="checkbox"
          //var div2 = document.createElement('div');
          //document.getElementById('todo'+i).appendChild(div2);
          //.id = "checkdiv"+i
          //div2.className = "checkdiv"
          //document.getElementById('checkdiv'+i).appendChild(checkbox);
          
        }
        
        console.log(result)
      }
    })
  })
}