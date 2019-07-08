const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Blog = require('../dataBase/models/blog');

router.get('/blog', (req, res, next) => { 
    Blog.find()
        .then(doc => {
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
                  },
                  items: doc
            });  
        });
});

router.post('/blog', (req, res, next) => {
    const blog = new Blog ({
        _id: new mongoose.Types.ObjectId(),
        category: req.body.category,
        title: req.body.title,
        description: req.body.description,
        content: req.body.content,
        authorSitation: req.body.authorSitation,
        author: req.body.author,
        conclusion: req.body.conclusion
    });
    blog
    .save()
    .then(result => {
        console.log(result);
    })
    .catch(err => console.log(err));
    res.status(201).json({
        message: 'Handling POST request!',
        createdProduct: blog
    });
});

router.patch('/blog/:postId', (req, res, next) => {
    const id = req.params.postId;
    const updateOps = {};
    for (const ops of req.body) {
        updateOps[ops.propName] = ops.value;
    }
    Blog.update({ _id: id }, { $set: updateOps })
    .exec()
    .then(result => {
        console.log(result);
        res.status(200).json(result);   
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});

router.delete('/blog/:postId', (req, res, next) => {
    const id = req.params.postId;
    Blog.remove({ _id: id })
    .exec()
    .then(result => {
        res.status(200).json(result);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});

router.get('/blog/elements', (req, res, next) => {
    Blog.find()
    .exec()
    .then(doc => {
        console.log(doc);
        res.status(200).json(doc);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    });
});

module.exports = router;