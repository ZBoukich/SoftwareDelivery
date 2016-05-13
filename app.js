/**
 * Created by Godfather on 13-5-2016.
 */

var express = require('express');
var app = express();


app.get('/',function(req, res){
    res.send("Testing");
});


app.listen(process.env.PORT || 5000);

module.exports = app;
