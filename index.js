"use strict";
 var shiftModel = require('./model');
var express = require('express');
var app = express();
var bookModel = require('./model');
var ObjectId = require("mongodb").ObjectId;
var bodyParser = require('body-parser');

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', '"Origin, X-Requested-With, Content-Type, Accept"');
  if(req.method === "OPTIONS"){
    res.header("Access-Control-Allow-Methods","GET,PUT,POST,DELETE")
  }
  next();
})
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.set('view engine', 'handlebars');

app.get('/api/register', function(req, res) {
  shiftModel.find({}, function(err, allPlumbers) {
  if (err) {
    return res.json({
      status: "error",
      error: err
    });
  } else {
    res.json({
      status: "success",
      data: allPlumbers
    });
  }
})
});


app.post('/api/register', function(req, res) {
  var name = req.body.name;
  var contact_details = req.body.contact_details;
  var days = req.body.days;
  var slots = req.body.slots;

  shiftModel.create({
    name: name,
    contact_details: contact_details,
    days:days,
    slots:slots
  }, function(err, registered) {
    if (err) {
      return err;
    }

          res.json({registered})
  })
})

































var port = process.env.PORT || 8001
var server = app.listen(port, function() {
  console.log("Started app on port : " + port)
});
