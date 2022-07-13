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

  if(login)
  {
    win.loadFile('Dashboard')
  }
  else{
    print("ew")
  }