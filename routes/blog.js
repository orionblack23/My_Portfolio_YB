const express = require('express');
const router = express.Router();

router.get('/blog', (req, res, next) => { 
    res.render('blog',{
        navbar: {brandName: 'YASSER'}, 
        section7: {
            headingTitle: 'Contact',
            email: 'orionb.y23@gmail.com',
            phone: '+90 533 836 13 68',
            social1: 'https://github.com/orionblack23',
            social1Font: 'fa-github',
            social2: 'https://www.linkedin.com/in/yasser-belemlougri-a3672610b/',
            social2Font: 'fa-linkedin'
          }
    });
});

router.post('/blog', (req, res, next) => {
    res.status(200).json({
        message: 'Handling POST requests to blog'
    });
});

router.get('/blog/:postId', (req, res, next) => {
    const id = req.params.postId;
    if(id === 'special') {
        res.status(200).json({
            message: 'You discovered the special ID'
        });
    } else {
        res.status(200).json({
            message: 'You pass an ID',
            id: id
        });
    }
});

router.patch('/blog/:postId', (req, res, next) => {
    res.status(200).json({
        message: 'Updated method!'
    });
});

router.delete('/blog/:postId', (req, res, next) => {
    res.status(200).json({
        message: 'deleted method!'
    });
});

module.exports = router;