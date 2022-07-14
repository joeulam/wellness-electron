const { app, BrowserWindow } = require('electron')
const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600
    })
  
    win.loadFile('index.html')
  }
  app.whenReady().then(() => {
    createWindow()
  })



  //Backend stuff dw abt it
  var mysql = require('mysql');

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
      console.log("connected!")
    }
  });



  