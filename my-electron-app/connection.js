//Backend stuff dw abt it
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword"
});

function loging(){
    con.connect(function(err) {
        if (err){
          alert(console.log("failed!"));
          throw err
        }
        else{
          alert(console.log("connected!"));
        }
      });
}

