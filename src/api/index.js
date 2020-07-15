const router = require('express').Router();

const { User, Pattern } = require('../db/models');

router.use('/users', require('./users')); // matches all requests to /api/users/
router.use('/patterns', require('./patterns'));

router.use(function (req, res, next) {
  const err = new Error('Not found.');
  err.status = 404;
  next(err);
}); // 404
module.exports = router;
