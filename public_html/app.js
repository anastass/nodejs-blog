var express = require('express');
var app = express();

var hbs = require('hbs');

var blogEngine = require('./blog');

app.set('view engine', 'html');
app.engine('html', hbs.__express);
app.use(express.bodyParser());

//app.get('/test/localhost', function(req, res) {
//    res.send('localhost is running on port 3000');
//});
//
//app.get('/test/readme', function(req, res) {
//    res.sendfile('README.md');
//});

app.get('/', function(req, res) {
    res.render('index', {title: "MyBlog", entries: blogEngine.getBlogEntries()});
});

app.get('/about', function(req, res) {
    res.render('about');
});

app.get('/article', function(req, res) {
    res.render('article');
});

app.listen(3000);