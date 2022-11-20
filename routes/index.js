var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { app: 'illiest app' });
});

router.get('/logout', function (req, res) {
  delete req.session.authenticated;
  res.redirect('/users');
});

module.exports = router;
