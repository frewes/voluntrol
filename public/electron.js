const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const isDev = require('electron-is-dev');

const Store = require('electron-store');

let mainWindow;

const store = new Store({
    configName: 'user-preferences',
    defaults: {
        windowBounds: {width: 800, height: 600 }
    }
});

function createWindow() {
    let {width, height} = store.get('windowBounds');
    mainWindow = new BrowserWindow({width: width, height: height});
    mainWindow.on('resize', () => {
        let { width, height } = mainWindow.getBounds();
        store.set('windowBounds', {width, height}); 
     });
     mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);
    if (isDev) {
        mainWindow.webContents.openDevTools();
    }
    mainWindow.on('closed', () => mainWindow = null);
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow == null) {
        createWindow();
    }
});