var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    pageTitle: 'Yasser BELEMLOUGRI',
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
      city: 'Lefke, Northen Cyprus'
    },
    section3: {
      headingTitle: 'Education',
      header: 'Computer Engineering',
      subHeader: 'European University of Lefke / 2016 - 2019',
      content: 'Receved one High Honor and 5 Honor award/Certificate. Finish with a CGPA of 3.35/4.00',
      header1: 'Computer Engineering',
      subHeader1: 'Meliksha University / 2015 - 2016',
      content1: '',
      header2: 'High School',
      subHeader2: 'College Horizon International / 2007 - 2014',
      content2: '',

    },
    section4: {
      headingTitle: 'Skills',
      skill: 'C/C++',
      level: '75',
      skill1: 'HTML 5',
      level1: '80',
      skill2: 'CSS 3',
      level2: '70',
      skill3: 'JavaScript',
      level3: '85',
      skill4: 'WordPress',
      level4: '70',
      skill5: 'SQL',
      level5: '80',
    }
   });
});

module.exports = router;
