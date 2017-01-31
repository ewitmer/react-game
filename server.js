var express = require('express')
var bodyParser = require('body-parser');

var app = express()

var PORT = process.env.PORT || 3000;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

let currentFewest = 60;

app.get('/fewest-guesses', function (req, res) {
  res.json(currentFewest)
})

app.post('/fewest-guesses/:userScore', function (req, res) {
  if (req.params.userScore < currentFewest) {
  	currentFewest = req.params.userScore
  }
  res.json(req.params.userScore);
})


app.listen(PORT, function () {
    console.log('Example app listening on localhost:' + PORT);
});

