 const router = require('express').Router();
 const members = require('../models/members');

router.get('/signup', (req, res)  => {
  res.render("members/new");
});

router.post('/signup', (req, res, next) => {
  const member = req.body
  members.create(member)
  .then(member => {
    res.redirect('/login');
  })
  .catch(error => {
    next(error);
  });
});

module.exports = router
