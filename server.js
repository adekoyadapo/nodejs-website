var express = require("express");

var morgan = require('morgan');

var app = express();

app.use(morgan('combined'))

app.use(express.static('public'));

//make way for some custom css, js and images
app.use('/css', express.static(__dirname + '/public/assets/css'));
app.use('/js', express.static(__dirname + '/public/assets/js'));
app.use('/images', express.static(__dirname + '/public/assets/images'));
app.get('*', function (req, res) {
    res.sendFile(__dirname + '/public/404.html')
});

var server = app.listen(8081, function () {
    var port = server.address().port;
    console.log("Server started at http://localhost:%s", port);
});