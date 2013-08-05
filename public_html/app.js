var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.sendfile('./views/index.html');
});

app.get('/test/', function(req, res) {
    res.send('localhost is running on port 3000');
});

app.listen(3000);