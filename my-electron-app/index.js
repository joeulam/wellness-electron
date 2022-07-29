//THIS IS A MODULE
const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')

const createWindow = () => {
    const win = new BrowserWindow({
      width: 1920,
      height: 1080,
      webPreferences: {
        nodeIntegration: false,
        contextIsolation: true,
        preload: path.join(__dirname, 'preload.js'),
    }
    
    });
  
    win.loadFile('index.html')
  }
  app.whenReady().then(() => {
    createWindow()
  })



 


//THIS FILE IS A SERVER SIDED FILE??//
   

  


  