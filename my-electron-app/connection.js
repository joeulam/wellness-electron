//Backend stuff dw abt it

//Listens to on login button
var login = document.getElementById("login");
  login.addEventListener("click",loging);

//Function of logging in
  function loging(){
    var username = document.getElementById("user").value;
    var password = document.getElementById("pass").value;
    alert(username + password);
    
    document.getElementById("login").style.color = "blue";
    //logining();
  }