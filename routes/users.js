var express = require('express');
var router = express.Router();
var mysql = require('mysql');

const connection = require('../config')


router.get('/', function (req, res, next) {
  res.render('users');
});

router.post('/login', function (req, res, next) {

  var email = req.body.email;
  var password = req.body.password;

  const sqlSelect = 'SELECT * FROM users WHERE email = ? AND password = ?'
  const search_query = mysql.format(sqlSelect, [email, password])

  connection.query( search_query, function (err, rows, fields) {
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

  const sqlCheck = "SELECT * FROM users WHERE email = ?"
  const search_query = mysql.format(sqlCheck, [email])

  const sqlInsert = "INSERT INTO users VALUES (0,?,?,?)"
  const insert_query = mysql.format(sqlInsert, [name, password, email])

  await connection.query(search_query, async function (err, result) {
    if (err) throw (err)

    if (result.length != 0) {
      // @todo how does mysql release connection
      // email exist from search query
      // connection.release()
      res.redirect('/users')
    } else {
      await connection.query(insert_query, async function (err, result) {
        if (err) throw (err)
        // @todo how does mysql release connection
        // inserted values successfully
        // connection.release()
        res.redirect('/users')
      })
    }
  })

})


module.exports = router;
