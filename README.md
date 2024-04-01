Electron Tutorial
//Set Up Electron Tutorial//

1 -- First, create the package.json file
     Give a name and version number to your project (like all/most projects have), then designate an entry point to your application
     {
        "name":"hello-world",
        "version":"1.0.0","
        "main":"main.js"  <--What is this? The entry point of the electron code!
     }
2 -- Install electron npm by running the command npm install electron --save-dev   
    installs and saves as a dev dependency
3 -- Add start script to package.json to run the program from visual studio
4 -- Create main.js file. This part of the program will handle different events and create the electron "browser" window
to display app on desktop
5 -- Add the required modules, and the window module that will display the app
6 -- Create the window to display the app/app UI
7 -- Create the index.html file for display
8 -- You can use any HTML stylings on your app, for example <marquee></marquee>
9 -- Build a css file to style your app, the same as you would a website

//Creating an executable

1 -- run the command "npm install electron-packager --save-dev"
2 -- from the project directory, run "npx electron-packager . --platform=win32 --arch=x64 --out=release-builds"
