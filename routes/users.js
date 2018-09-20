var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/cool', function(req, res) {
  res.render('users', { title: 'Youre so Cool' });
});
module.exports = router;
