var express = require('express');
var app = express();
var port = process.env.PORT || 9900;

app.listen(port, function(){
    console.log("== Server listening on port", port);
});