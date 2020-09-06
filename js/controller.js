var resumeApp = angular.module('resumeApp', ["ui.bootstrap", "ngSanitize"]);
resumeApp.controller('resumeCtrl', function ($scope, $http) {

  $scope.form = {
    'firstname': '',
    'lastname': '',
    'email': '',
    'attachment': '',
    'subject': '',
    'message': ''
  };

  $scope.submit = function (valid) {
    if (valid) {
      $http.post('email.php', $scope.form)
        .success(
          function (data) {
            $scope.response = data;
            $scope.form = {};
            if (data)
              alert("Thank you for showing interest! Vedant Bhoj has been notified.");
            else
              alert("Something went wrong and Email was not sent!!");
          })
        .error(
          function (data) {
            $scope.response = data
          })
    }
  }


  //$http.get('res/data/resume.json').success(function(data) {
  $scope.resume_data = {
    "personal_info": {
      "first_name": "Vedant Rajay",
      "last_name": "Bhoj",
      "resume_link": "https://vedantbhoj.com/res/resume/Vedant%20Rajay%20Bhoj%20Resume.pdf",
      "position": "Computer Engineering",
      "institute": "San Jose State University",
      "email": [
        "bhoj.vedant28@gmail.com",
        "vedant.bhoj@sjsu.edu"
      ],
      "tel": "+1-669-XXX-XXXX",
      "city": "San Jose",
      "state": "CA",
      "pin": "95110"
    },
    "links": {
      "LinkedIn": [{
        "link": "https://www.linkedin.com/in/vedantbhoj/",
        "icon": "fab fa-linkedin"
      }
      ],
      "GitHub": [{
        "link": "https://github.com/vedantbhoj",
        "icon": "fab fa-github"
      }
      ],
      "YouTube": [{"link" : "https://www.youtube.com/channel/UCcHcNTnEa-y-IeXqT5q8JrA",
      "icon" : "fab fa-youtube"
      }
      ],
      "Instagram": [{
        "link": "https://www.instagram.com/vedant.bhoj",
        "icon": "fab fa-instagram"
      }
      ],
      "Twitter": [{
        "link": "https://twitter.com/28_vedant",
        "icon": "fab fa-twitter"
      }
      ]
    },
    "skills": {
      "programming_languages": [
        "JavaScript",
        "C++",
        "C#",
        "Python",
        "Java"
      ],
      "web_technologies": [
        "HTML5",
        "CSS",
        "JavaScript",
        "AngularJS",
        "ReactJS",
        "Node.js",
        "PHP",
        "AJAX",
        "Twitter Bootstrap"
      ],
      "databases": [
        "MySQL",
        "MongoDB",
        "MS-SQL"
      ],
      "tools": [
        "Git",
        "JIRA",
        "Confluence",
        "Fiddler",
        "WireShark"
      ],
      "operating_systems": [
        "Windows",
        "Ubuntu",
        "Raspbian",
        "MacOS"
      ]
    },
    "things_i_know": [
      "Web Development",
      "Front End",
      "Back End",
      "Web Services",
      "Git Version Control",
      "Agile Methodologies",
      "Linux",
      "Network Security",
      "Cryptography",
      "Data Engineering",
      "ETL Data Pipeline",
      "AWS",
      "JIRA",
      "Confluence",
      "Blockchain",
      "Web CMS"
    ],
    "timeline": {

      "JUL 2020 - PRESENT": [
        {
          "type": "Work",
          "title": "Associate Software Engineer at Health Level Inc.",
          "desc": [
            "Engineering on the data analytics platform to design and implement software and data analysis modules to answer business questions, with a focus on full-stack engineering and user experience."
          ],
          "link": "https://www.healthlevel.com",
          "link_desc": "HealthLevel Inc."
        }
      ],

      "JUN 2020": [
        {
          "type": "Project",
          "title": "MEAN Stack Salary Calculator for HR",
          "desc": [
            "HR web application using MEAN stack. The application allows you to enter employee names, salary information, deductions, and perform some calculations for their pay based on the information input."
          ],
          "link": "https://github.com/vedantbhoj/MEAN-HR",
          "link_desc": "HR App GitHub Repo"
        }
      ],

      "FEB 2020 - MAY 2020": [
        {
          "type": "Work",
          "title": "Web Developer at SJSU",
          "desc": [
            "Migrating, designing and overhauling university departmental websites to support new design."
          ],
          "link": "https://www.sjsu.edu/",
          "link_desc": "SJSU website"
        }
      ],
      
      "JAN 2020 - MAY 2020": [
        {
          "type": "Project",
          "title": "Blockchain Based Vehicle Information Management System (Research Paper Under Review)",
          "desc": [
            "Technology stack: (Node.js, React.js, Express, AWS, Ethereum, Truffle, Web3.js, Chart.js, REST API, NoSQL) End to end Car Management with service prediction using MERN stack. Blockchain and Data Analytics to improve security and efficiency. Ethereum is being used for security and decentralized platform for implementing Blockchain"
          ],
          "link": "https://www.youtube.com/watch?v=EmloBPuF9ss",
          "link_desc": "Watch Elevator Pitch"
        }
      ],

      "APR 2020": [
        {
          "type": "Project",
          "title": "The Pandemic Chronicles - Data Visualization",
          "desc": [
            "Technology stack: (Node.js, React.js, Express, Docker, Chart.js, AmCharts, Google Charts, REST API, NoSQL) The application is a repository for pandemic information for the past ten years. Provision to explore, compare and visualize data to learn and fight the current situation."
          ],
          "link": "https://github.com/vedantbhoj/pandemic-chronicles",
          "link_desc": "GitHub Repo"
        }
      ],

      "MAY 2019 - DEC 2019": [
        {
          "type": "Work",
          "title": "Software Engineering Intern at HealthLevel Inc.",
          "desc": [
            "Full Stack Engineering on a data analytics platform used by various healthcare institutes across the United States.",
            "Worked extensively on the core product to add features and improve the overall user experience",
            "Developed end to end functionalities by writing Stored Procedures, consuming API’s and buiding responsive UI reports."
          ],
          "link": "https://www.healthlevel.com/",
          "link_desc": "HealthLevel Inc."
        }
      ],
      "JAN 2019 - MAY 2019": [
        {
          "type": "Work",
          "title": "Student Assistant - Web Developer",
          "desc": [
            "Started working as a Student Assistant at eCampus, SJSU.",
            "Assist in the design, development, and maintenance of eCampus websites.",
            "Help creating, managing, and maintaining a variety of interactive multimedia materials, graphics and presentations.",
            "Assist in developing documents and reports in support of eCampus projects and daily operations."
          ],
          "link": "https://blogs.sjsu.edu/ecampus/2019/04/18/vedant-bhoj/",
          "link_desc": "eCampus - Profile"
        }
      ],
      "NOV 2018": [
        {
          "type": "Project",
          "title": "Cross Domain Enterprise Online Market Place",
          "desc": [
            "An e-commerce marketplace web application with features like easy check-out of products from multiple vendors, search products based on multiple factors etc.",
            "Google and Facebook sign-in integration. Product sorting and filtering based on rating and view count.",
            "Based on CURL calls to access remote company's data and integrate into the common market place."
          ],
          "link": "https://marktplatz.vedantbhoj.com",
          "link_desc": "View Project"
        },
        {
          "type": "Project",
          "title": "Linux Networking - Enterprise Network using multiple Raspberry Pi's",
          "desc": [
            "Configured multiple Raspberry Pi's to function as an Enterprise Network.",
            "Each Raspberry Pi was able to access or get service from other Raspberry Pi for functionality.",
            "Functions included Raspberry Pi as a Router, WLAN/Access Point, FTP and Web Server, DHCP and DNS Server, Firewall, Back-Bone routing and ISP."
          ],
          "link": ""
        }
      ],
      "AUG 2018": [
        {
          "type": "Life",
          "title": "Masters at San Jose State University",
          "desc": [
            "My major is Computer Engineering.",
            "Specialization in Computer Networks and Software Security.",
            "Coursework – Data Structures and Algorithms, Enterprise Software Platforms, Operating Systems,  Computer Networks, Network Security.",
            "Expected graduation : May 2020."
          ],
          "link": ""
        }
      ],
      "MAY 2018": [
        {
          "type": "Life",
          "title": "Left - Cognizant Technology Solutions (Programmer Analyst)",
          "desc": [
            "SEPT 2015 to MAY 2018",
            "Left Cognizant Technology Solutions to start a new journey of my life.",
            "Cognizant had me for almost 3 years.",
            "Over the course of my industry experience at Cognizant, I have gained knowledge related to various Web Technologies and Network security.",
            "In Cognizant, I got a chance to work on some interesting projects like Smart Card Access Management System, Cyber Security Incident Reporting and Spam Reporting Tool. "
          ],
          "link": "./res/docs/Experience_Letter.pdf",
          "link_desc": "See Experience letter"
        }
      ],
      "JULY 2017": [
        {
          "type": "Life",
          "title": "Received ‘Beyond the boundaries’ award as a recognition of my contribution.",
          "desc": [
            "Received ‘Beyond the boundaries’ award as a recognition of my contribution."
          ],
          "link": "./res/docs/Cognizant_Q2_Award.pdf",
          "link_desc": "See Award"
        }
      ],
      "FEB 2016 - JUN 2017": [
        {
          "type": "Project",
          "title": "Projects at Cognizant",
          "desc": [
            "<b>Smart Card Access Management</b>",
            "This application allows the associates to raise access requests to the ODC/common doors of the workplace.",
            "Enhanced the web services to handle multiple city/location short term access requests which drastically reduced the processing time and ticket volume by 70%.",
            "Created web-services and batch jobs to issue, activate or deactivate cards based on clients, designations and access locations across all the facilities in India.",
            "<b>Spam Reporting Tool</b>",
            "This application automated the manual task of analysing the reported spams and notifying the associates.",
            "Implemented a visualization dashboard for spam trend with Canvas.js. Also, developed a functionality to send out email notifications to the associates and specific groups using LDAP.",
            "Developed a Microsoft Outlook plugin to send the reported suspicious emails to a service account.",
            "<b>Cyber Security Incident Reporting Tool</b>",
            "Cybersecurity team uses this application to log and track network security incidents across the organization.",
            "Developed a dashboard to track the active incidents, thus improving incident response time.",
            "Created a Batch Job to send automated two way 1-Click communication emails at specific time intervals."
          ],
          "link": ""
        }
      ],
      "SEP 2018": [
        {
          "type": "Life",
          "title": "Programmer Analyst at Cognizant Technology Solutions",
          "desc": [
            "Started working as a Programmer Analyst at Cognizant",
            "I went through four months of the rigorous training program in various web technologies focused on MVC architecture.",
            "After training I got an opportunity to work in the IT Security department.",
            "I worked on many projects which were developed for the Cybersecurity team to monitor and act on the various security threats across the systems in our organization."
          ],
          "link": ""
        }
      ],
      "MAY 2015": [
        {
          "type": "Life",
          "title": "Graduated from Vishwakarma Institute Of Information Technology",
          "desc": [
            "Earned my Bachelor of Engineering degree in Electronics and Telecommunication",
            "Achieved 4th rank in order of merit among all the successful 152 candidates in the Bachelor of Engineering (A.Y 2014-15) (Electronics and Telecommunication) examination.",
            "GPA - 3.7"
          ],
          "link": "https://www.slideshare.net/slideshow/embed_code/key/bTwoRwRBfH2FB",
          "link_desc": "Rank Certificate"
        }
      ],
      "FEB 2015": [
        {
          "type": "Project",
          "title": "Security based Face Recognition by using Space, Scale and Orientation Domains",
          "desc": [
            "Objective of this project was to develop a fast and robust face recognition system that is invariant to changes such as illumination, expressions and occlusions by exploring features in image space, scale and orientation.",
            "Image space, scale and orientation jointly contain large information than the individual domain. In visual perception the position, frequency and orientation selectivity have main role.",
            "Algorithm was based on Local Gabor binary pattern histogram sequence (LGBPHS).",
            "Extensive use of MATLAB with Image Processing Tool Box for image analysis, segmentation, enhancement, noise reduction and training the data-set."
          ],
          "link": "https://github.com/vedantbhoj/Security-based-Face-Recognition",
          "link_desc": "See Project"
        },
      ],
      "MAR 2014": [
        {
          "type": "Project",
          "title": "LVDT transducer displacement measurement",
          "desc": [
            "This project was designed to measure microscopic distance using Linear Voltage Displacement transducer.",
            "LVDT was interfaced with signal conditioning IC AD598 to give a proportional DC voltage corresponding to the distance which was then displayed on 16x2 LCD using PIC microcontroller.",
            "Outcomes:  PCB Design, Code Optimization, Analog Design."
          ],
          "link": "https://www.youtube.com/watch?v=okFGslv-gCQ",
          "link_desc": "Watch DEMO"
        }
      ]
    },
    "endorsements":{
      "sheryl_ehrman": [{
        "linkedIn_URL": "https://www.linkedin.com/in/sheryl-ehrman-64483222/",
        "image": "res/images/endorsers/sheryl_ehrman.jfif",
        "name": "Sheryl Ehrman",
        "title": "Dean of Engineering at San Jose State University",
        "endorsed_for_company": "San Jose State University",
        "date_association": "July 8, 2020, Sheryl worked with Vedant in different groups",
        "quote": "I came to know Vedant through our SJSU Engineering Go program. I think he is a great representative of our graduate programs at SJSU. His interests lie in software engineering and web development. He is very keen to be a part of an enterprise that takes environmental and healthcare issues and provides solutions in an innovative way that would take a client focused approach to problem solving. From our interactions, I can see that he adapts well to different cultures, and he takes advantage of opportunities that are available to him. I think he would be an excellent team member, and he does have aspirations to strike out on his own as an entrepreneur someday."
      }
      ],
      "gordon_douglas": [{
        "linkedIn_URL": "https://www.linkedin.com/in/gccdouglas/",
        "image": "res/images/endorsers/gordon_douglas.jfif",
        "name": "Gordon Douglas",
        "title": "Director, Institute for Metropolitan Studies<br>Dept. of Urban & Regional Planning",
        "endorsed_for_company": "San Jose State University",
        "date_association": "May 23, 2020, Gordon managed Vedant directly",
        "quote": "Vedant Bhoj is a highly talented, reliable, and easy-going person. It was an enormous benefit to our department to have his careful and knowledgeable assistance in the complete (top-to-bottom) redesign of our website to reflect merged programs and changing priorities within the framework for a completely new style template and CMS that we had to work with. He was full of design ideas and innovative work-arounds to make the site do what we wanted within the constraints and to make our programs appear as their best. Vedant is also a kind and personable colleague; it was a pleasure to work with him. I am happy to serve as a reference and I would strongly recommend him to any potential employers and future colleagues."
      }
      ],
      "adway_lele": [{
        "linkedIn_URL": "https://www.linkedin.com/in/adway-lele/",
        "image": "res/images/endorsers/adway_lele.jfif",
        "name": "Adway Lele",
        "title": "Senior Software Engineer at Health Level Inc.",
        "endorsed_for_company": "Health Level Inc.",
        "date_association": " January 8, 2020, Adway managed Vedant directly",
        "quote": "I had opportunity to work with Vedant for 3 months of summer and a bit more. Vedant took responsibility of his modules and finished them efficiently. He immediately bought into HealthLevel's processes and was compliant through and through. He documented his proposals and modules meticulously. over all, it was a pleasure working with him. "
      }
      ],
      "pradeep_kp": [{
        "linkedIn_URL": "https://www.linkedin.com/in/pradeep-k-p-a2b1778/",
        "image": "res/images/endorsers/pradeep_kp.jfif",
        "name": "Pradeep K.P",
        "title": "Project Manager at Cognizant",
        "endorsed_for_company": "Cognizant Technology Solutions",
        "date_association": "July 16, 2019, Pradeep managed Vedant directly",
        "quote": "Vedant was an excellent team player. He had played a major role in developing new enhancements in maintenance applications and developing applications from scratch. He owns the task assigned to him and is capable to successfully drive the same to closure. He ensured to deliver quality products. He have good analytical skills and capable enough to implement apt solution for the problems. He is capable to work independently and able to support team members for complex problems. He always thrives to study new technologies and implement it in applications where ever possible. Wishing him all the best for his higher studies and future endeavors."
      }
      ],
      "ketan_rudrurkar": [{
        "linkedIn_URL": "https://www.linkedin.com/in/ketanrudrurkar/",
        "image": "res/images/endorsers/ketan_rudrurkar.jfif",
        "name": "Ketan Rudrurkar",
        "title": "Software Development Engineer at Amazon",
        "endorsed_for_company": "San Jose State University",
        "date_association": "July 4, 2020, Vedant worked with Ketan in the same group",
        "quote": "I had an opportunity to observe Vedant Bhoj closely as a team member on several of my projects during my Master's degree, including my final Master's Project. I found Vedant to be pro-active, innovative, and a team player who blends well with the team and is helpful whenever needed. Vedant has always been respectful and open to the views, feedbacks, and inputs from other team members as well which helped in creating room for further improvements and modifications in several aspects of the projects. Above all, I feel Vedant is an excellent human being who is friendly and thinks about the people around him. Any team would be lucky to have him by their side."
      }
      ],
    }
  };
  $scope.previous = 0;
  //});
});


