var express = require('express');
var router = express.Router();
var data = {
              name: 'Damian Hyde',
              title: 'Damian Hyde Resume',
              job_title: 'Web Application Developer',
              contact: {
                          phone: '9545994292',
                          phone_formatted: '(954) 599-4292',
                          address: {
                                      address_1: '6 Devon Ct.',
                                      address_2: '',
                                      city: 'Nanuet',
                                      state: 'NY',
                                      zip: '10954'
                                    },
                          email: 'ocyrus.dh@gmail.com'
                        },
              skills: {
				  coding: [
					  { language: 'HTML', score: 4 },
					  { language: 'Pug', score: 4 },
					  { language: 'CSS', score: 4 },
					  { language: 'SASS', score: 3 },
					  { language: 'Javascript', score: 4 },
					  { language: 'PHP', score: 4 },
					  { language: 'MySQL', score: 4 },
					  { language: 'Regex', score: 3 },
					  { language: 'C/C++', score: 1 }
				  ],
				  frameworks: [
					  { framework: 'Jquery', score: 4 },
					  { framework: 'Vue.js', score: 1 },
					  { framework: 'Laravel', score: 2 },
					  { framework: 'Express', score: 3 }
				  ],
				  environments: [
					  { environment: 'LAMP', score: 3},
					  { environment: 'Nodejs', score: 2 },
					  { program: 'Git/GitHub', score: 3 },
					  { environment: 'AWS', score: 2 }
				  ],
				  software: [
					  { program: 'PHPStorm', score: 3},
					  { program: 'Sublime', score: 3 },
					  { program: 'Dreamweaver', score: 3 },
					  { program: 'Photoshop', score: 4 },
					  { program: 'After Effets', score: 3 },
					  { program: '3D Max', score: 3 }
				  ]
              },
			 summary: "Web Application Developer with over 6 years experience working with\n" +
					 "raw code as well incorporation of frameworks and APIs.  I am\n" +
					 "attracted to challenges and love to prove the impossible possible.\n" +
					 "I also have a lot of experience working with other developers and\n" +
					 "trouble shooting foreign code. I believe test driven development\n" +
					 "and extreme programming methodologies is important to create better\n" +
					 "code and better developers.",
			 experience: [
				 {
					 company: 'Retrieval Masters Credit Bureau',
					 link: 'http://retrievalmasters.com/',
					 start: 'Jan 2017',
					 end: 'Sep 2017',
					 title: 'Sr Developer',
					 skills: ['HTML', 'CSS', 'Javascript', 'AJAX', 'PHP', 'MySQL'],
					 description: "Developed a web based application that help the company manage\n" +
								 "data between multiple clients and other web services. Architect\n" +
								 "large data bases, Built payment systems and dialing programs.\n" +
								 "Created data parsing services for importing data from various\n" +
								 "clients. Performed regular software maintenance and\n" +
								 "optimizations.  Worked alongside debt collection data analysts\n" +
								 "to create informative SQL queries. Utilized Twilio API to\n" +
								 "replace a call center's phone system, payment IVR, and auto\n" +
								 "dialer.  Oversaw entire LAMP stack across multiple production\n" +
								 "servers.  Implemented client sync processes with PHP/Laravel.\n" +
								 "Allowed users to manage accounts with dynamic Javascript/Vue.js\n" +
								 "frontend.",
					 list: [],
					 contact: {
					 	 name: 'Jeff Wolloman',
						 title: 'CFO',
						 phone: '9147722298',
						 phone_formatted: '(914) 772-2298'
					 }
				 },
				 {
					 company: 'Revintu',
					 link: 'http://revintu.com/',
					 start: 'May 2012',
					 end: 'Jan 2017',
					 title: 'Web Application Developer',
					 skills: ['HTML', 'CSS', 'Javascript', 'AJAX', 'PHP', 'MySQL'],
					 description: "Designed applications for clients that wanted to move their\n" +
								 "current infrastructure to the web. Created guest list\n" +
								 "management, table management, staff management, and inventory\n" +
								 "tracking software.  This also included custom reports and\n" +
								 "content management systems. File parsing and data manipulation.\n" +
								 "Provided updates and maintenance to their software maintenance\n" +
								 "and upgrades.  Integrated communication to SMS servers and other\n" +
								 "paging systems.  Worked also with 3rd party APIs to deliver\n" +
								 "custom software solutions that take advantage of existing\n" +
								 "applications. Created guest facing applications used for\n" +
								 "marketing and data gathering.  Software was designed to work in\n" +
								 "browsers, mobile devices and tablets or custom kiosks.<br />\n" +
								 "Clients include but limited to:",
					 list: [
						 { item: 'Retrieval Masters Credit Bureau', link: 'http://retrievalmasters.com/' },
						 { item: 'HME', link: 'http://www.hme.com/' },
						 { item: 'Jtech', link: 'http://www.jtech.com/' },
						 { item: 'Ignite Restaurant Group', link: 'http://www.igniterestaurants.com/' },
						 { item: 'Coyle Hospitality Group', link: 'http://guestxt.com/' },
						 { item: 'Guestxt', link: 'http://retrievalmasters.com/' },
						 { item: 'Host Concepts', link: 'http://www.hostconcepts.com' }
					 ],
					 contact: {
						 name: 'Todd Fuchs',
						 title: 'Owner',
						 phone: '5167157166',
						 phone_formatted: '(516) 715-7166'
					 }
				 },
				 {
					 company: 'Host Concepts',
					 link: 'http://www.hostconcepts.com',
					 start: 'Aug 2011',
					 end: 'May 2012',
					 title: 'Jr Developer',
					 skills: ['HTML', 'CSS', 'Javascript', 'AJAX', 'PHP', 'MySQL', 'Web Graphics'],
					 description: "Developed an application for restaurant to dynamically manage\n" +
								 "staff and tables.  Created a restaurant guest portal to be used\n" +
								 "for notification and feedback purposes.  Also created games in\n" +
								 "this area for entertaining.  Created tools for marketing to their\n" +
								 "guests.",
					 list: [],
					 contact: {
						 name: 'Todd Fuchs',
						 title: 'Owner',
						 phone: '5167157166',
						 phone_formatted: '(516) 715-7166'
					 }
				 },
				 {
					 company: 'Spiritcube',
					 link: 'http://spiritcube.com/',
					 start: 'Oct 2010',
					 end: 'June 2011',
					 title: 'UI Developer',
					 skills: ['HTML', 'CSS', 'Javascript', 'AJAX', 'Web Graphics'],
					 description: "Developed the client side users interface for spiritcube.com.\n" +
								 "Worked along side PHP developers to create a user driven digital\n" +
								 "memorial site.  Users were able to collaborate and create\n" +
								 "time line slide shows from shared media along with life stories.\n" +
								 "Created a custom WYSIWYG content management system that enabled\n" +
								 "users to completely customize their memorials or used pre-made\n" +
								 "templates.",
					 list: [],
					 contact: {
						 name: 'Chris Nelson',
						 title: 'Owner',
						 phone: '3053606583',
						 phone_formatted: '(305) 360-6583'
					 }
				 },
				 {
					 company: 'Freelance',
					 link: '',
					 start: '2005',
					 end: 'Oct 2010',
					 title: 'Sr Developer',
					 skills: ['HTML', 'CSS', 'Javascript', 'Web Graphics', '3D Graphics', 'Video Editing', 'After Effects'],
					 description: "Created websites and other digital media foro various clients",
					 list: [],
					 contact: {}
				 }
			 ],
			education: [
				{
					certificate: 'Web Design Certification',
					school: 'SouthTech Academy',
					state: 'Florida',
					year: '2010'
				},
				{
					certificate: 'Bachelor of Science',
					school: 'Art Institute of Fort Lauderdale',
					state: 'Florida',
					year: '2004'
				},
			],
			hobbies: ['Tizen Apps', 'Arduino Programing', '3D Modeling', '3D Printing/Prototyping', 'Home Remodeling'],
			references: [
				{
					name: 'Bradley Baumann',
					title: 'Lead Developer',
					company: 'CFB Strategies',
					phone: '9142638409',
					phone_formatted: '(914) 263-8409',
					email: ''
				},
				{
					name: 'James Lyon',
					title: 'Software Engineer',
					company: 'SoulCycle',
					phone: '9089635298',
					phone_formatted: '(908) 963-5298',
					email: 'jameslyon42@gmail.com'
				},
				{
					name: 'Alberto Leon',
					title: 'Front End Software Engineer',
					company: 'Mirror Labs',
					phone: '9142336014',
					phone_formatted: '(914) 233-6014',
					email: 'alberto.leon.jr@gmail.com'
				},
				{
					name: 'Dorcie Loviskie',
					title: 'Developer',
					company: '',
					phone: '9142751356',
					phone_formatted: '(914) 275-1356',
					email: ''
				},
				{
					name: 'Todd Fuchs',
					title: 'Owner',
					company: 'Revintu & Hostconcepts',
					phone: '5167157166',
					phone_formatted: '(516) 715-7166',
					email: ''
				},
				{
					name: 'Zak Raxter',
					title: 'Director of IT & Security',
					company: 'Retrieval Masters Credit Bureau',
					phone: '5168469802',
					phone_formatted: '(516) 846-9802',
					email: 'zraxter@retrievalmasters.com'
				},
				{
					name: 'Anold Lugo',
					title: 'Callcenter Director',
					company: 'Retrieval Masters Credit Bureau',
					phone: '3475736932',
					phone_formatted: '(347) 573-6932',
					email: 'alugo@retrievalmasters.com'
				}
			]
		};

/* GET resume page. */
router.get('/', function(req, res, next) {
  res.render('resume', data);
});

module.exports = router;
