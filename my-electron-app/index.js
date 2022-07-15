//THIS IS A MODULE
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

function logins(user,pass){
  var pg = require('pg');
  var connectionString = "postgres://"+user+":"+pass+"@heyo/ip:5432/heyo_scales";
  var pgClient = new pg.Client(connectionString);
  pgClient.connect();
};

export {logins};

//THIS FILE IS A SERVER SIDED FILE??//
   

  


  