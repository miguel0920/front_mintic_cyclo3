// var express = require('express');
// var path = require('path');
// var serveStatic = require('serve-static');
// app = express();
// app.use(serveStatic(__dirname + "/dist"));
// var port = process.env.PORT || 5000;
// app.listen(port);
// console.log('server started '+ port);


import express from "express";
import serveStatic from "serve-static";
const app = express();

app.use(serveStatic(__dirname) + '/dist');

app.all('*', (req, res) => {
    res.status(200).sendFile(__dirname + + '/dist/index.html');
});

app.listen(process.env.PORT || 8080);