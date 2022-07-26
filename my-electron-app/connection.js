//Backend stuff dw abt it


//Listens to on login button
var login = document.getElementById("loginbutton");
login.addEventListener("click",loging);

function logins(user,pass){
  var pg = require('pg');
  var connectionString = "postgres://"+user+":"+pass+"@74.68.42.21:5432/heyo_scale";
  var pgClient = new pg.Client(connectionString);
  
  pgClient.connect(function(err){
    if(err) {
      console.log("error");
      document.getElementById("incorrect").style.visibility = "visible";
    }
    else{
      console.log("Connected");
      dashboard();
    }
  }
  );
  
};



function dashboard()
{
  window.location = "Dashboard.html";
}

  function loging(){
    var username = document.getElementById("UserInput").value;
    var password = document.getElementById("PassInput").value;
    if((username||password)=="")
    {
      console.log("error2");
      document.getElementById("incorrect").style.visibility = "visible";
    }
    else{
      logins(username,password);
      document.getElementById("loginbutton").style.color = "blue";
    }
  };




  