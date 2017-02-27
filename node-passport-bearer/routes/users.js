
var passport = require('passport');
var express = require('express');
var router = express.Router();

var User = require('./../models/user');

// Register
router.get('/', function(req, res, next) {
  res.render('register', {})
});

router.post('/', function(req, res) {
  User.create(req.body, function(err, created) {
    if(err) {
      console.log(err);
      return;
    }

    res.status(200).json({
      data: created
    });
  });
});

//login
router.get('/login', function(req, res) {
  res.render('login');
});

router.post('/login', passport.authenticate('bearer', {session: false}) ,function(req, res) {
  res.status(200).json({
    user: req.user
  });
  res.redirect('/');
});

//Delete
router.post('/:id', function(req, res) {
  User.findByIdAndRemove(req.params.id, function(err, deleted) {
   if(err) {
     console.warn(err);
     return;
   }
    res.redirect('/users');
  });
});

module.exports = router;
