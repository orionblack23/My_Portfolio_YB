var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');


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
    },
    section5: {
      headingTitle: 'Experience',
      header: 'Intern at Huawei BURKINA FASO',
      subHeader: 'Huawei Burkina | 2018 - 2019',
      content: 'Understing principle of networking, viewing real-time server configuration and learning how to use eNSP.',
      header1: 'Freelancer for Merveille Technologies',
      subHeader1: 'Merveille Technologies | 2018 - Present',
      content1: 'Work as a part-time photoshop and web designer. Developping front-end as well as back-end responsive websites.',
      header2: 'Charity Association Hands-Up',
      subHeader2: 'Hands-Up | 2018 - Present',
      content2: 'Being currently the general secretary and also responsible of the design and the IT section of the association.',
    },
    section6: {
      headingTitle: 'My Blog',
    },
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

router.post('/post', (req, res, next) => { 
  const output =`
      <p>You have a new contact request</p>
      <h3>Contact Details</h3>
      <ul>
        <li>Name: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
        <li>Email: ${req.body.subject}</li>
      </ul>
      <h3>Message</h3>
      <p>${req.body.message}</p>
 `;

 // create reusable transporter object using the default SMTP transport
 var transporter = nodemailer.createTransport(smtpTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  auth: {
    user: 'betglamx@gmail.com', // generated ethereal user
    pass: 'orionblack23' // generated ethereal password
  },
  tls:{
    rejectUnauthorized:false
  }
}));

// send mail with defined transport object
  let mailOption = {
  from: '"Nodemailer address" <betglamx@gmail.com>', // sender address
  to: "orionb.y23@gmail.com", // list of receivers
  subject: "Mail Request From Your Portfolio", // Subject line
  text: "Hello world?", // plain text body
  html: output // html body
};

transporter.sendMail(mailOption, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

  res.redirect('/');
});
});

module.exports = router;
