const router = require('express').Router();
module.exports = router;

router.use('/users', require('./users')); // matches all requests to /api/users/ etc.
router.use('/patterns', require('./patterns'));
router.use('/projects', require('./projects'));

router.use('/', (req, res) => {
  res.send('api response!');
});

router.use((req, res, next) => {
  const err = new Error('Not found.');
  err.status = 404;
  next(err);
}); // 404
