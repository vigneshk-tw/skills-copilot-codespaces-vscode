// Create Web Server
// Create a web server that listens on port 3000 and serves the comments.html file
// when someone visits http://localhost:3000/comments.

// This means you will need to create a comments.html file in your project directory.
// The comments.html file should have an h1 tag that says "Comments" and a ul tag
// with at least 5 li tags with comments in them.

// When you visit http://localhost:3000/comments in your browser, you should see the
// comments page.

// Make sure you are using the fs module to read the contents of the comments.html
// file.

// You can use the following code to read the contents of the comments.html file:

// fs.readFile('./comments.html', 'utf8', (err, data) => {
//   if (err) {
//     throw err;
//   }
//   console.log(data);
// });
// You can use the following code to serve the contents of the comments.html file:

// http.createServer((req, res) => {
//   fs.readFile('./comments.html', 'utf8'