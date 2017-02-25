var express = require('express');
var router = express.Router();
var User = require('./../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('register', {})
});

router.post('/', function(req, res) {
  User.register(new User({username: req.body.username}), req.body.password, function(err) {
    if(err) {
      console.log(err); 
      return;
    } 

    res.redirect('/login');
  })
});

module.exports = router;
