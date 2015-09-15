var app = require('app');

var BrowserWindow = require('browser-window');

var mainWindow = null;

app.on('ready', function () {
    var mainWindow = new BrowserWindow({
        width: 1200,
        height: 800
    });
    mainWindow.loadUrl('file://' + __dirname + '/app/app.htm');
});
