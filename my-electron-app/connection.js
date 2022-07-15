//Backend stuff dw abt it

//Listens to on login button
var login = document.getElementById("login");
login.addEventListener("click",loging);
//const {logins} = require('./index');
//Function of logging in

function logins(user,pass){
  var pg = require('pg');
  var connectionString = "postgres://"+user+":"+pass+"@heyo/ip:5432/heyo_scales";
  var pgClient = new pg.Client(connectionString);
  pgClient.connect();
};

  function loging(){
    var username = document.getElementById("user").value;
    var password = document.getElementById("pass").value;
    //lib.logins(username,password);
    logins(username,password);

    alert(username + password);
    
    document.getElementById("login").style.color = "blue";
    //logining();
  };
  