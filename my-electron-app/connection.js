//Backend stuff dw abt it

//Listens to on login button
var login = document.getElementById("login");
login.addEventListener("click",loging);

function logins(user,pass){
  var pg = require('pg');
  var connectionString = "postgres://"+user+":"+pass+"@localhost:5432/heyo_scale";
  var pgClient = new pg.Client(connectionString);
  
  /*pgClient.connect(function(err){
    if(err) throw err;{
      console.log("connected");
    } 
  }
  );*/

  pgClient.connect(function(err){
    if(err) {
      console.log("error");
    }
    else{
      console.log("Connected");
    }
  }
  );
  
};


  function loging(){
    var username = document.getElementById("user").value;
    var password = document.getElementById("pass").value;
    alert(username + password);
    alert(logins(username,password));
    
    document.getElementById("login").style.color = "blue";
  };
  