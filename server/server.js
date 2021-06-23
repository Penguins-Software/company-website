const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '../build')));

// set up rate limiter: maximum of ten requests per minute
var RateLimit = require('express-rate-limit');
var limiter = new RateLimit({
  windowMs: 60*1000, // 1 minute
  max: 10
});

app.use(limiter);

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.listen(80);