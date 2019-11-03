const express = require('express');
const app = express();
const path = require("path");

// set static directories
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname+ '/public/index.html'));
});

module.exports = app;
