const {app, BrowserWindow} = require('electron')

app.disableHardwareAcceleration()

// let win
// app.once('ready', () => {
//   win = new BrowserWindow({
//     webPreferences: {
//       offscreen: true
//     }
//   })
//   win.loadURL(`file://${__dirname}/index.html`)
//   win.webContents.on('paint', (event, dirty, image) => {
//     //  updateBitmap(dirty, image.getBitmap())
//   })
//   win.webContents.setFrameRate(30)
// })

let win;
app.once('ready',()=>{
  win = new BrowserWindow({width:800, height:600,frame:false});
  win.on('closed',()=>{win = null});
  // win.loadURL(`file://${__dirname}/index.html`);
  win.loadURL('https://wx.qq.com/');
  // win.webContents.setFrameRate(50);
});
