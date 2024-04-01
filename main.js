//REQUIREMENTS
const electron = require("electron");
const app = electron.app;
const window = electron.BrowserWindow;
const path = require("path");
const url = require("url");

//Build our user window

let win;
function createWindow(){ //Electron includes this browser window api to create and control windows
    win = new window({
        //In here we can adjust the size of our window, as well as other properties such as customizing or hiding the toolbar...
        width: 800,
        height: 600,
        resizable: true,
        //Tool bar
        //hiding the tool bar
        //frame: false
        //titleBarStyle: "hidden"
        
    });
    win.loadURL(url.format({
        pathname: path.join(__dirname, "index.html"),
        protocol: "file",
        slashes: true
    })); //Creates the browser window and loads index.html into the browser window. Like web development, Electron relies HTML and CSS for
        //Since the purpose of electron is to create desktop apps in the same manner as website apps
    
        win.on('closed', () => { //<== this is an event that will run when the program window is closed
            win = null; //garbage collecting
        })

        //glow for attention
        setTimeout(() => { 
            win.flashFrame(true); 
        }, 2000) 
          
        win.once('focus', () => win.flashFrame(false)); 

        
}

//We can use the app module to create the window
app.on('ready', createWindow);

