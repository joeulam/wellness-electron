//Backend stuff dw abt it

//global vars

//Listens to on login button
if(document.getElementById("loginbutton")){
  var login = document.getElementById("loginbutton");
  login.addEventListener("click",loging);
}


function logins(user,pass){
  var pg = require('pg');
  var connectionString = "postgres://"+user+":"+pass+"@74.68.42.21:5432/heyo_scale";
  localStorage.setItem("userg",user);
  localStorage.setItem("passg",pass);

  var pgClient = new pg.Client(connectionString);
  
  conp =pass;
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
    usernameg = username;
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

if(document.getElementById("Submitresp")){
  var subresp = document.getElementById("Submitresp");
  subresp.addEventListener("click",moodradio);
}
  

  function moodradio() {
    console.log("running");
    var ele = document.getElementsByName("moods");
    var mood = 0;
    var sql;
    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked == "bad")
        {
          mood = 0;
  
        }
        else if(ele[i].checked == "meh"){
          mood = 5;
        }
        else if(ele[i].checked == "Pretty good")
        {
          mood = 10;
        }
    }
    var pg = require('pg');
    let usernameg = localStorage.getItem("userg");
    let conp = localStorage.getItem("passg");
    var gconn = new pg.Client("postgres://"+usernameg+":"+conp+"@74.68.42.21:5432/heyo_scale");
        gconn.connect(function (err){
          if(err){
            console.log(err);
            console.log(usernameg);
            console.log(conp);
          }
          else{
            sql = "INSERT INTO public."+ usernameg +"(moodrating) VALUES ("+mood+")";
            document.getElementById("Submitresp").style.color = "blue";
            gconn.query(sql, function (err, result) {
              if (err) throw err;
              console.log("1 record inserted");
            });
          }
          
        });
          
          


};
  


  