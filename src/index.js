const express = require('express');
const path = require('path');
// const volleyball = require('volleyball');

const db = require('./db');
db.sync();

const PORT = 3000; // || process.env.PORT;
const app = express();

// app.use(volleyball());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', require('./api'));

app.use(express.static(path.resolve(__dirname, '../public')));

app.use('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.use((err, req, res, next) => {
  console.error(err, err.stack);
  res.status(500).send(err.message);
});

app.listen(PORT, () => console.log(`Mixing it up on port ${PORT}`));

module.exports = app;
