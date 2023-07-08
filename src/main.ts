import path from 'path';
import { app, BrowserWindow } from 'electron';

function createWindow () {
  const win = new BrowserWindow({
    width: 1280,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    },
    icon: path.join(__dirname, 'images', 'icon.png')
  });
  
  const nodeEnv = (process.env['NODE_ENV'] || '').trim();
  if (nodeEnv === 'development') win.loadURL('http://localhost:5173/')
  else win.loadFile('./dist/client/index.html')

}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
