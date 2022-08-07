//Backend stuff dw abt it

//global vars

//Listens to on login button
if(document.getElementById("loginbutton")){
  var login = document.getElementById("loginbutton");
  login.addEventListener("click",loging);
}

function show(){
  var x = document.getElementById("PassInput");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
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
  
var mood;


  function moodradio() {
    console.log("running");
    var diarys = document.getElementById("Diary").value;
    
    var sql;
    mood = document.querySelector('input[name="moods"]:checked').value;


    
    var pg = require('pg');
    let usernameg = localStorage.getItem("userg");
    let conp = localStorage.getItem("passg");
    var gconn = new pg.Client("postgres://"+usernameg+":"+conp+"@74.68.42.21:5432/heyo_scale");
    let today = new Date().toISOString();
    var datetime = Math.floor(Date.now() / 1000);
        gconn.connect(function (err){
          if(err){
            console.log(err);
            console.log(usernameg);
            console.log(conp);
            console.log(diarys);
          }
          else{
            sql = "INSERT INTO public."+ usernameg +"(moodrating, diary, date, datetime) VALUES ("+mood+", '"+diarys+"','"+today+"',to_timestamp('"+datetime+"'))";
            document.getElementById("Submitresp").style.color = "blue";
            console.log(mood);
            console.log(today);

            gconn.query(sql, function (err, result) {
              if (err) throw err;
              console.log("2 record inserted");
              window.location = "Dashboard.html";

            });
          }
          
        });
          
          
        function moodget()
        {

        }

};
  


  