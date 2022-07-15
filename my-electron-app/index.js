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

  var pg = require('pg');
  import connectionString from "./connection"
  var pgClient = new pg.Client(connectionString);
  pgClient.connect();

//THIS FILE IS A SERVER SIDED FILE??//
   

  


  