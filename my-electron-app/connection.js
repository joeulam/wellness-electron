//Backend stuff dw abt it

//Listens to on login button
var login = document.getElementById("login");
login.addEventListener("click",loging);
  import {logins} from "./index";
//const {logins} = require('./index');
//Function of logging in

  function loging(){
    var username = document.getElementById("user").value;
    var password = document.getElementById("pass").value;
    //lib.logins(username,password);
    logins(username,password);

    alert(username + password);
    
    document.getElementById("login").style.color = "blue";
    //logining();
  };
  