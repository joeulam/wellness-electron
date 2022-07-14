 export function logining(){
 var mysql = require('mysql2');
  var con = mysql.createConnection({
    host: "localhost",
    user: "yourusername",
    password: "yourpassword"
  });
  con.connect(function(err) {
    if (err){
      console.log("failed!");
      throw err
    }
    else{
      console.log("connected!");
    }
  });
}