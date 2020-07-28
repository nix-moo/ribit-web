const router = require('express').Router();
const { Pattern, Row, Project, User } = require('../db/models');
// const {
//   adminsOnly,
//   matchingUserOrAdmin,
//   isLoggedIn,
// } = require('./permissions');

// module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    const allPatterns = await Pattern.findAll();
    //   {
    //   // where: { userId: req.user.id },
    // }
    // ();
    if (allPatterns) {
      res.json(allPatterns);
    } else {
      res.send('no db response');
    }
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const formData = {};
    if (req.body.title) {
      formData.name = req.body.title;
    } else {
      res.status(206).send('Name is required');
    }

    if (req.body.author) formData.author = req.body.author;
    if (req.body.ravelry) formData.ravelry = req.body.ravelry;
    if (req.body.sizes) formData.sizes = req.body.sizes;

    const newPattern = await Pattern.create(formData);
    const user = await User.findByPk(req.user.id);

    user[0].addPattern(newPattern);
    res.json(newPattern);
  } catch (error) {
    next(error);
  }
});
