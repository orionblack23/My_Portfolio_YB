const express = require('express');
const router = express.Router();

router.post('/post', (req, res, next) => { 
    res.render('index');
});

module.exports = router;