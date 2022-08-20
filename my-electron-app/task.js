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
var shopt = document.getElementById("shop");
shopt.addEventListener("click",shop);

function shop(){
  window.location = "shop.html";
}

var sub = document.getElementById("submit")
sub.addEventListener("click",send)
const sub1 = document.getElementById("text")

sub1.addEventListener("keypress", function(event) {

  if (event.key === "Enter"){
    console.log("run")
    event.preventDefault();

    // Trigger the button element with a click
    send();
  }
})

var entryc = document.getElementById("Entry");
entryc.addEventListener("click",entrychange);

function entrychange()
      {
        window.location = "entry.html";
      }


//---------------------------------------SQL QUERYS---------------------------------------//
function checks(){
  var pg = require('pg');
 
  let usernameg = localStorage.getItem("userg");
  let conp = localStorage.getItem("passg");
  var gconn = new pg.Client("postgres://"+usernameg+":"+conp+"@74.68.42.21:5432/todo");
  gconn.connect(function(err){
    sql = "SELECT * FROM public."+usernameg
    gconn.query(sql,function(err,result){
      for(i = 0; i < result.rows.length;i++)
      {
        //sql = "set @count = 0; update "+usernameg+" set "+usernameg+" . id = @count:=@count+1;"
        gconn.query(sql);
        var check = document.getElementsByClassName('checkbox-round')[i]

        console.log(i)
        if(check.checked && check != null)
        {
          remove(i)
        }
    }
    })
  })
}

function rest(){
  var pg = require('pg');
 
  let usernameg = localStorage.getItem("userg");
  let conp = localStorage.getItem("passg");
  var gconn = new pg.Client("postgres://"+usernameg+":"+conp+"@74.68.42.21:5432/todo");
  gconn.connect(function(err){
    sql = "ALTER SEQUENCE "+usernameg+"_id_seq RESTART; UPDATE "+usernameg+" SET id = DEFAULT;"
    gconn.query(sql,function(err){
      if(err)
      {
        console.log(err);
      }
    })
  })
  

}


function remove(i)
{
  var pg = require('pg');
 
  let usernameg = localStorage.getItem("userg");
  let conp = localStorage.getItem("passg");
  var gconn = new pg.Client("postgres://"+usernameg+":"+conp+"@74.68.42.21:5432/todo");
  gconn.connect(function(err){

  
    sql = "delete from "+usernameg+" where id="+(i+1)
    gconn.query(sql,function(err,result){
      if(err){
        console.log(err)
      }
      else{
        console.log("yas"+i)
        var removes = document.getElementById('todo'+i)
        removes.remove();
        rest();
      }
      
    })
    
    
      
    
  })
}


function send(){
  var text = document.getElementById("text").value;
  if(text == "" || text == " ")
  {
    console.log("fail")
    return "failed"
  }
  else{
  var pg = require('pg');
  let id = localStorage.getItem("id");
  id = parseInt(id)
  let usernameg = localStorage.getItem("userg");
  let conp = localStorage.getItem("passg");
  var gconn = new pg.Client("postgres://"+usernameg+":"+conp+"@74.68.42.21:5432/todo");
  gconn.connect(function(err){
    //sql = "INSERT INTO public."+usernameg+"(todo,id) VALUES ('"+text+"','"+id+"')"
    sql = "INSERT INTO public."+usernameg+"(todo) VALUES ('"+text+"')"

    gconn.query(sql,function(err,result){
      if(err){
        console.log(id)
        console.log(err)
      }
      else{
        console.log(id)
        id++;
        console.log("To do inserted")
        document.getElementById("text").value = ''
        makenew()
      }
    })
  })
  }


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
          var text = document.createElement('p');

          document.getElementById('todo'+i).appendChild(checkbox);
          document.getElementById('todo'+i).appendChild(text);
          text.id = "text"+i;
          checkbox.className = "checkbox-round"
          checkbox.type ="checkbox"
          checkbox.setAttribute("onclick", "checks()");

          var texts = JSON.stringify(result.rows[i].todo);
          texts = JSON.parse(texts)
          document.getElementById("text"+i).innerText = texts;
          console.log(texts)

          //var div2 = document.createElement('div');
          //document.getElementById('todo'+i).appendChild(div2);
          //.id = "checkdiv"+i
          //div2.className = "checkdiv"
          //document.getElementById('checkdiv'+i).appendChild(checkbox);
          
        }
        localStorage.setItem("id",result.rows.length);

        console.log(result)
      }
    })
  })//connect
}

function makenew()
{
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
          var i = result.rows.length;
          var div = document.createElement('div');
          document.getElementById("list").appendChild(div);
          div.id = "todo"+i
          div.className = "todoc"
          var checkbox = document.createElement('input');
          var text = document.createElement('p');
          localStorage.setItem("id",result.rows.length);

          document.getElementById('todo'+i).appendChild(checkbox);
          document.getElementById('todo'+i).appendChild(text);
          text.id = "text"+i;
          checkbox.className = "checkbox-round"
          checkbox.type ="checkbox"
          checkbox.onclick='checks()'
          console.log(i)

          var texts = JSON.stringify(result.rows[i-1].todo);
          texts = JSON.parse(texts)
          document.getElementById("text"+i).innerText = texts;
          console.log(texts)
          setTimeout(500);
          //var div2 = document.createElement('div');
          //document.getElementById('todo'+i).appendChild(div2);
          //.id = "checkdiv"+i
          //div2.className = "checkdiv"
          //document.getElementById('checkdiv'+i).appendChild(checkbox);
          document.location.reload()
        checks()
        
        console.log(result)
      }
    })
  })//connect
}