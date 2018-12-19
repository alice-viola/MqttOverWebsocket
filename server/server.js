var http = require('http');
var path = require('path');
var express = require('express');

var access_control_allow_origin_server = "http://localhost:3003";

var app = express();
app.enable('trust proxy', 1);	


app.use(express.static(path.join(__dirname, 'public')));
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', access_control_allow_origin_server);
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

try {
    var server = app.listen("3003", function() {});
} catch (err) {
    console.log("Main server error: ", err);
}