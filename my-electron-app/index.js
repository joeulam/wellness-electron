//THIS IS A MODULE
const { app, BrowserWindow, ipcMain } = require('electron')
const createWindow = () => {
    const win = new BrowserWindow({
      width: 1920,
      height: 1080,
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
        preload: "my-electron-app/preload.js"
    }
    
    })
  
    win.loadFile('index.html')
  }
  app.whenReady().then(() => {
    createWindow()
  })



 


//THIS FILE IS A SERVER SIDED FILE??//
   

  


  