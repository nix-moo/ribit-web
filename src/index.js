const express = require('express');
// const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// logging middleware
const debug = process.env.NODE_ENV === 'test';
app.use(volleyball.custom({ debug }));

// parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// static middleware
app.use(express.static(path.join(__dirname, '../client/app.js')));

// routes
app.use('/api', require('./api'));
// The only thing after this might be a piece of middleware to serve up 500 errors for server problems. However, if you have middleware to serve up 404s, that go would before this as well
app.get('*', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.use(function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});


// for deploying to Heroku
const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Hi there!');
  console.log(`Your server is listening on port ${port}`);
});
