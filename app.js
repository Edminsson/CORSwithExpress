var express = require('express');

var app = express();
var port = 5000;

app.use(function(req, res, next) {
    var origin = req.headers.origin ? req.headers.origin : "*";
    //origin cannot be * when using withCredentials for CORS to work
    res.header("Access-Control-Allow-Origin", origin);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    //Access-Control-Allow-Credentials is required for CORS to work with withCredentials
    res.header("Access-Control-Allow-Credentials", true)
    next();
});

app.use(express.static('public'));
app.use(express.static('src/views'));

app.listen(port, function(err){
    console.log('Running on port ', port);
});