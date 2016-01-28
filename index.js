var express = require('express');
var app = express();
var path = require('path');
var url = require('url');
var mongoose = require('mongoose');
var shorturl = require('./store/shurl'); 

app.set('view engine', 'jade');
app.set('views', './pub/views');

app.get('/shurl', function (req, res) {
  res.render('shurl');
});

app.get('/shurl/new/*', function (req, res) {
    var pathname = url.parse(req.url).pathname.substring(11);
    shorturl("genShort", pathname, function (result) {
        res.end(result);
        return;
    });
});

app.get('/short/*', function (req, res) {
    var pathname = url.parse(req.url).pathname.substring(7);
    shorturl("getShort", pathname, function (result) {
        if (result.hasOwnProperty('error')) {
            res.end(JSON.stringify(result));
        } else {
            var orig = result[0].original;
            var parsed = url.parse(orig);
            var red_url = !parsed.protocol? "http://"+orig : orig;
            res.redirect(301, red_url);
        }
    });
});

app.get('/', function (req, res) {
  res.render('index');
});

app.get('/*', function (req, res) {
  res.render('index');
});

  var server = app.listen(process.env.PORT || 3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});