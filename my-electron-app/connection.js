//Backend stuff dw abt it


function loging(){
  var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword"
});
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

