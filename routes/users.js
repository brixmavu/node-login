var express = require('express');
var router = express.Router();
// const crypto = require('crypto');

const connection = require('../config')


router.get('/', function(req, res, next) {
  res.render('users');
});

router.post('/login', function (req, res, next) {

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

router.post('/registration', async function (req, res, next) {
   const name = req.body.name
   const email = req.body.email
   const password = req.body.password

   connection.getconnection
})


module.exports = router;
