const express = require('express');
const router = express.Router();

const Blog = require('../dataBase/models/blog');


router.get('/post/:postId', (req, res, next) => {
    const id = req.params.postId;
    Blog.findById({ _id: id })
        .then (doc => {
            res.render('post',{
                navbar: {brandName: 'YASSER'}, 
                section7: {
                    headingTitle: 'Contact',
                    email: 'orionb.y23@gmail.com',
                    phone: '+90 533 836 13 68',
                    social1: 'https://github.com/orionblack23',
                    social1Font: 'fa-github',
                    social2: 'https://www.linkedin.com/in/yasser-belemlougri-a3672610b/',
                    social2Font: 'fa-linkedin'
                  },
                  items: doc
            });
        });
});


module.exports = router;