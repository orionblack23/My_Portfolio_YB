var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    section1: {
      title: 'Yasser BELEMLOUGRI',
      subtitle: 'Computer Engineer | Web Developer',
    }
   });
});

module.exports = router;
