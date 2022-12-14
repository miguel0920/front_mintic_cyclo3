// const express = require('express');
// const path = require('path');
// const serveStatic = require("serve-static");

// app = express();
// app.use(serveStatic(path.join(__dirname, 'dist')));
// const port = process.env.PORT || 8080;
// app.listen(port, () => {
//   console.log("App now running on port", port);
// });

var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
var app = express();
var port = process.env.PORT || 5000;
app.listen(port);
console.log('starting project at 1' + port);
app.engine('pug', require('pug').__express);
app.set('views', '/');
app.set('view engine', 'pug');
//Look for statics first
app.use(serveStatic(path.join(__dirname, '/')));
//Return the index for any other GET request
app.get('/*', function (req, res) {
    const index = path.join(__dirname, 'build', 'index.html');
    res.sendFile(index);
});

console.log('Miguel 3');