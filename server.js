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

app.use(express.json());


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


app.post('/Friendventure/reviews/addReview', function (req, res, next) {

  if(req.body && req.body.date && req.body.time && req.body.body && req.body.author) { //check if these all exits
    console.log("--req.body: ", req.body);
    reviewsData.push({
      date: req.body.date,
      time: req.body.time,
      body: req.body.body,
      author: req.body.author
    })
    console.log("--added data: ", reviewsData);
    fs.writeFile("./reviewsData.json",
     JSON.stringify(reviewsData, null, 2),
     function(err) {
       if(!err) {
         res.status(200).send();
       } else {
         res.status(500).send("ERROR || Error saving review");
       }
     }
    );
  }
  else {
    //console.log("--req.body: ", req.body);
    res.status(400).send("ERROR || Missing: date, time, body, and or author in request!!!");
  }
});


app.get('*', function (req, res) {
  res.status(404).render('404Page')
});



app.listen(port, function () {
  console.log("== Server is listening on port", port);
});
