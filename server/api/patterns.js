const router = require('express').Router();
const { Pattern, Row, Project, User } = require('../db/models');
// const {
//   adminsOnly,
//   matchingUserOrAdmin,
//   isLoggedIn,
// } = require('./permissions');

module.exports = router;

// Get all patterns
router.get('/', async (req, res, next) => {
  try {
    // if (req.user) console.log('USER.ID: \n', req.user.id)

    const patterns = await Pattern.findAll({
      attributes: ['title', 'author', 'ravelry', 'sizes'],
      include: [
        {
          model: User,
          where: {
            id: req.user.id,
          },
          required: true,
        },
      ],
    });
    res.json(req, patterns);
  } catch (error) {
    next(error);
  }
});

// Get a specific pattern
router.get('/:id', async (req, res, next) => {
  try {
    const pattern = await Pattern.findOne({
      where: {
        id: req.params.id,
      },
      include: {
        model: Row,
      },
    });

    res.json(pattern);
  } catch (error) {
    next(error);
  }
});

// Add a new pattern
router.put('/', async (req, res, next) => {
  try {
    console.log({...req.body})
    const newPattern = await Pattern.create({...req.body})
    console.log(newPattern)
    res.json({...req.body})
  } catch (error) {
    next(error)
  }
})

// Update a pattern
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
