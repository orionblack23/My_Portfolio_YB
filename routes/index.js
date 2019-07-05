var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    navbar: {brandName: 'YASSER'}, 
    section1: {
      title: 'Yasser BELEMLOUGRI',
      subtitle: 'Computer Engineer | Web Developer',
      profileImage: '/images/man.png'
    },
    section2: {
      headingTitle: 'About Me',
      content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, consectetur culpa,
                cupiditate explicabo ipsum nobis officia omnis pariatur quos rerum saepe sed. Aliquid culpa
                cum distinctio obcaecati officiis quaerat quas.`,
      social1: 'https://github.com/orionblack23',
      social1Font: 'fa-github',
      social2: 'https://www.linkedin.com/in/yasser-belemlougri-a3672610b/',
      social2Font: 'fa-linkedin',
      download: '/images/CV_Resume1.png',
      title: 'Yasser BELEMLOUGRI',
      dateOfBirth: '23 September 1996',
      email: 'orionb.y23@gmail.com',
      phone: '+90 533 836 13 68',
      city: 'Lefke, Northen Cyprus',
      interest1: 'Data mining',
      interest1Icon: 'n',

    }
   });
});

module.exports = router;
