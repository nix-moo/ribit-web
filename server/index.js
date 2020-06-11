const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '../client/main.js')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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

const port = process.env.PORT || 3000; // for deploying to Heroku
app.listen(port, function () {
  console.log('Hi there!');
  console.log(`Your server is listening on port ${port}`);
});
