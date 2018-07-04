var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var mongoose = require('mongoose');
var book = require('./book');
var routes = require('./routes');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var port = process.env.PORT || 8090;
var router = express.Router();

mongoose.connect('mongodb://localhost:27017/books');

app.use(cors());
app.use('/api', router);
app.listen(port);
console.log('REST API is runnning at ' + port);

router.use(function (req, res, next) {
  
    console.log('Logging of request will be done here');
    next(); 
});


