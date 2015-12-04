var app = require('app');

// var BrowserWindow = require('browser-window');
//
// var mainWindow = null;
//
// app.on('ready', function () {
//     var mainWindow = new BrowserWindow({
//         width: 1200,
//         height: 800,
//         show: false
//     });
//     mainWindow.loadUrl('file://' + __dirname + '/app/app.htm');
// });

const BrowserWindow = require('browser-window');

app.on('ready', function () {
    var win = new BrowserWindow({
        width: 1200,
        height: 800,
        minWidth: 1200,
        minHeight: 800,
        show: false
    });
    win.on('closed', function() {
        win = null;
    });

    win.loadURL('file://' + __dirname + '/app/app.htm');
    win.show();

});
