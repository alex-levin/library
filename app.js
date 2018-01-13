var express = require('express');

// Instance of express
var app = express();
var port = 5000;

// Setting up public directory as static
app.use(express.static('public'));
app.use(express.static('src/views'));

app.get('/', function(req, res) {
    res.send('Hello World');
});

app.get('/books', function(req, res) {
    res.send('Hello Books');
});

app.listen(port, function(err) {
    console.log('running server on port ' + port);
});