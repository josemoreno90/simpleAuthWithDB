const router = require('express').Router();
const members = require('./members');

router.get('/', (req, res) => {
  res.send('this is the dashboard');
});

router.use('/', members)




module.exports = router
