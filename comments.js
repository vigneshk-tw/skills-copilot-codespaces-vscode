// Create Web Server
// Create a web server that listens on port 3000 and serves the comments.html file
// when someone visits http://localhost:3000/comments.
// Use the fs module to read the comments.html file and serve it back to the user.
// Use the http module to create the server.

const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    console.log(`Request made to ${req.url}`);

    if (req.url === '/comments') {
        fs.readFile(path.join(__dirname));}
    });