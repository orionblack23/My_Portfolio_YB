const express = require('express');
const router = express.Router();

router.get('/post', (req, res, next) => { 
    res.render('post');
});

module.exports = router;