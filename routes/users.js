var express = require('express');
var router = express.Router();
// const crypto = require('crypto');

const connection = require('../config')


router.get('/', function(req, res, next) {
  res.render('users');
});

router.post('/', function (req, res, next) {

  var email = req.body.email;
  var password = req.body.password;

  connection.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], function (err, rows, fields) {
    if (err) throw err
    // if user not found
    if (rows.length <= 0) {
      res.redirect('/users')
    }
    else { // if user found
      req.session.authenticated = true;
      res.redirect('/');
    }
  })
})

module.exports = router;
