var resumeApp = angular.module('resumeApp', ["ui.bootstrap"]);
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
      "Wordpress": [{
        "link": "https://blogs.vedantbhoj.com/",
        "icon": "fab fa-wordpress"
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
      "FEB 2020 - Present": [
        {
          "type": "Work",
          "title": "Student Assistant Web Designer at SJSU",
          "desc": [
            "Migrating, designing and overhauling university departmental websites to support new responsive design."
          ],
          "link": "https://www.sjsu.edu/",
          "link_desc": "SJSU website"
        }
      ],

      "MAY 2019 - DEC 2019": [
        {
          "type": "Work",
          "title": "Software Engineering Intern at HealthLevel Inc.",
          "desc": [
            "Full Stack Engineering on a data analytics platform used by various hospitals across the United States.",
            "Working extensively on the ETL data pipeline to streamline the onboarding process for new customers.",
            "Consuming API’s to support the mobile app based on Ionic framework."
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
          "link": "https://www.youtube.com/watch?v=dT2U4Y_pgFk",
          "link_desc": "Project Demo"
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
      "JUN 2017": [
        {
          "type": "Project",
          "title": "Smart Card Access Management System (Cognizant)",
          "desc": [
            "This application allows the associates to raise access requests to the ODC/common doors of the workplace.",
            "Enhanced the web services to handle multiple city/location short term access requests which drastically reduced the processing time and ticket volume by 70%.",
            "Created web-services and batch jobs to issue, activate or deactivate cards based on clients, designations and access locations across all the facilities in India."
          ],
          "link": ""
        }
      ],
      "AUG 2016": [
        {
          "type": "Project",
          "title": "Spam Reporting Tool (Cognizant)",
          "desc": [
            "This application automated the manual task of analysing the reported spams and notifying the associates.",
            "Implemented a visualization dashboard for spam trend with Canvas.js. Also, developed a functionality to send out email notifications to the associates and specific groups using LDAP.",
            "Developed a Microsoft Outlook plugin to send the reported suspicious emails to a service account."
          ],
          "link": ""
        }
      ],
      "FEB 2016": [
        {
          "type": "Project",
          "title": "Cyber Security Incident Reporting Tool (Cognizant)",
          "desc": [
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
    }
  };
  $scope.previous = 0;
  //});
});


