const express = require('express');
const path = require('path');
const serveStatic = require("serve-static");

app = express();
app.use(serveStatic(path.join(__dirname, 'dist')));
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log("App now running on port", port);
});