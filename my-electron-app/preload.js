const { contextBridge } = require("electron");
const { Client } = require('pg');
const API = {
    
    
    
}

window.api;
contextBridge.exposeInMainWorld("api",API)
