//var express = require('express');
//var app = express();
//var port = process.env.PORT || 9900;
//app.listen(port, function(){
//    console.log("== Server listening on port", port);
//});

var http = require('http')

http.createServer(function (req, res) {
	res.writeHead(200, {"Content-Type": "text/plain"})
	res.end("Hello world\n")
}).listen(process.env.PORT)
