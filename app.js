var express = require('express');

var app = express();
var port = 5000;

app.use(function(req, res, next) {
    if (req.method === 'OPTIONS') {
        console.log('!OPTIONS');
        var headers = {};
        // IE8 does not allow domains to be specified, just the *
        // headers["Access-Control-Allow-Origin"] = req.headers.origin;
        headers["Access-Control-Allow-Origin"] = "*";
        headers["Access-Control-Allow-Methods"] = "POST, GET, PUT, DELETE, OPTIONS";
        headers["Access-Control-Allow-Credentials"] = false;
        headers["Access-Control-Max-Age"] = '86400'; // 24 hours
        headers["Access-Control-Allow-Headers"] = "Authorization, X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept";
        res.writeHead(200, headers);
        res.end();
    }

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