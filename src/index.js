const { app, BrowserWindow } = require('electron');
const url = require('url');
const {
  default: installExtension,
  REACT_DEVELOPER_TOOLS,
  REDUX_DEVTOOLS
} = require('electron-devtools-installer');

const path = require('path');

if (process.env.ELECTRON_START_URL) {
  require('electron-reload')(__dirname);
}

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({ width: 1400, height: 768 });

  const startUrl =
    process.env.ELECTRON_START_URL ||
    url.format({
      pathname: path.join(__dirname, './build/index.html'),
      protocol: 'file:',
      slashes: true
    });

  mainWindow.loadURL(startUrl);

  Promise.all([
    installExtension(REACT_DEVELOPER_TOOLS),
    installExtension(REDUX_DEVTOOLS)
  ])
    .then(names =>
      names.forEach(name => console.log(`Added Extension: ${name}`))
    )
    .catch(errs =>
      errs.forEach(err => console.log('An error occurred: ', err))
    );

  mainWindow.webContents.once('dom-ready', () => {
    mainWindow.webContents.openDevTools();
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
