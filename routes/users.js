
var passport = require('passport');
var express = require('express');
var router = express.Router();
var User = require('./../models/user');

// Registes
router.get('/', function(req, res, next) {
  res.render('register', {})
});

router.post('/', function(req, res) {
  User.register(new User({username: req.body.username}), req.body.password, function(err) {
    if(err) {
      console.log(err); 
      return;
    } 

    res.redirect('/users/login');
  })
});

//login
router.get('/login', function(req, res) {
  res.render('login', {});
});

router.post('/login', passport.authenticate('local'), function(req, res) {
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
