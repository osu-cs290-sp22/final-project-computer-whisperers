//JS Stuff Here

var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var fs = require('fs');

var reviewsData = require('./reviewsData.json');

var app = express();
var port = process.env.PORT || 3000;

app.engine('handlebars', exphbs.engine({ defaultLayout: null}) );
app.set('view engine', 'handlebars');

app.use(express.static('public'));



//Code:
//fs.


app.get('/', function (req, res, next) {
  //console.log('shiz1');
  //res.status(200).sendfile(path.join(__dirname,'public', 'index.html'));
  //console.log(twitDataTemp);
  res.status(200).render('gamePage');

});

app.get('/Friendventure', function (req, res, next) {
  //console.log('shiz1');
  //res.status(200).sendfile(path.join(__dirname,'public', 'index.html'));
  //console.log(twitDataTemp);
  res.status(200).render('gamePage');

});

app.get('/Friendventure/reviews', function (req, res, next) {
  //console.log('shiz1');
  //res.status(200).sendfile(path.join(__dirname,'public', 'index.html'));
  //console.log(twitDataTemp);
  res.status(200).render('reviewsPage', {
    reviewsData: reviewsData
  });

});

/*
app.get('/', function (req, res, next) {
  //console.log('shiz1');
  //res.status(200).sendfile(path.join(__dirname,'public', 'index.html'));
  //console.log(twitDataTemp);
  res.status(200).;

});
*/


app.get('*', function (req, res) {
  res.status(404).render('404Page')
});



app.listen(port, function () {
  console.log("== Server is listening on port", port);
});
