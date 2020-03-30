<?php
	$servername = "bhojvedant2844138.ipagemysql.com";
        $username = "vedantbhoj";
        $password = "vedantbhoj";
        $dbname = "portfolio_vedant";
        $conn =  mysqli_connect($servername, $username, $password, $dbname);

		if ($conn->connect_error) {
    		die("Connection failed: " . $conn->connect_error);
    		return NULL;
		} 

         $sql = "UPDATE Counter SET visits = visits+1 WHERE id = 1";
         $result = mysqli_query($conn, $sql);
         $sql = "SELECT visits FROM Counter WHERE id = 1";
         $result = mysqli_query($conn, $sql);

	 if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            $visits = $row["visits"];
        }
    } else {
        echo "no data";
    }
?>

<!DOCTYPE html>
<html ng-app="resumeApp">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="Description"
    content="I am currently pursuing a Masters of Science in Computer Engineering at San Jose State University, California. I completed my under graduation from Vishwakarma Institute of Information Technology, Pune, India with a Bachelor's degree in Electronics and Telecommunication Engineering. My primary areas of interest include Web Development, Data Engineering and Computer Networks. I have 3 years of experience as a Programmer Analyst at Cognizant where I developed and maintained multi-layered web applications for the IT security teams. Currently interning at a Health Care startup as a Full Stack Engineer. I am proficient in JavaScript, C# and have worked with C, JAVA, MATLAB and Python before. I enjoy developing web applications and I am skilled in HTML5, CSS, JavaScript and know frameworks like Angular and ReactJS. Additionally, I have experience developing ETL data pipeline and backend.">
  <meta name="Keywords"
    content="SJSU, San Jose State University, Masters, Graduate, Web Development, Full Stack, Software Engineer, Computer Science, React, JavaScript, HTML, CSS">
  <title>Vedant Bhoj</title>

  <!--stylesheets-->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
  <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:400,300,700" rel="stylesheet" type="text/css">
  <link rel="stylesheet" href="css/simpletextrotator.css">
  <link rel="stylesheet" href="css/style.css">
  <link rel="stylesheet" href="css/timeline.css">
  <link rel="stylesheet" href="css/animations.css">
  <link rel="stylesheet" href="css/all.css">
  <link rel="icon" href="res/images/page_icon.png">

  <!--scripts-->
  <script src="https://d3js.org/d3.v3.min.js"></script>
  <script src="https://code.jquery.com/jquery-1.11.3.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.0-rc.0/angular.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/0.14.3/ui-bootstrap-tpls.min.js"></script>

  <script src="js/controller.js"></script>
  <script src="js/jquery.simple-text-rotator.min.js"></script>
  <script src="js/main.js"></script>
  <!-- <script src="js/all.js"></script> -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js"></script>

  <!-- Global site tag (gtag.js) - Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-134614952-1"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', 'UA-134614952-1');
  </script>

  <script>
    new WOW().init();
  </script>

</head>

<body data-spy="scroll" data-target=".navbar" data-offset="50" ng-controller="resumeCtrl">
  <!--navigation-->
  <nav class="navbar navbar-default navbar-fixed-top">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar"
          aria-expanded="false" aria-controls="navbar">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand bigEntrance" href="{{resume_data.personal_info.resume_link}}">
          <span class="glyphicon glyphicon-save-file pulse"></span> RESUME</a>
      </div>
      <div id="navbar" class="navbar-collapse collapse">
        <ul class="nav navbar-nav navbar-right">
          <li><a href="#top">ABOUT ME</a></li>
          <li><a href="#skills">SKILLS</a></li>
          <li><a href="#timeline">TIMELINE</a></li>
          <li><a href="#contactemail">HIRE ME</a></li>
          <li><a href="#contact">CONTACT</a></li>
          <li><a href="https://blogs.vedantbhoj.com">MY BLOG</a></li>
        </ul>
      </div>
    </div>
  </nav>
  <!--end navigation-->
  <div id="top"></div>
  <div class="wrapper">
    <!--about pane-->
    <div id="about" class="section section-fixed">
      <div id="titlecard" class="container vertically-center">
        <div class="row">
          <div class="col-lg-6 slideRight">
            <div class="container-fluid text-center">
              <img class="img img-responsive img-circle profile-image center-block" src="res/images/wide_profile.jpg"
                alt="profile_image">
              <h2 class="inverse-color">{{resume_data.personal_info.first_name | uppercase}}
                {{resume_data.personal_info.last_name | uppercase}}</h2>
              <h4 class="inverse-color">MS - {{resume_data.personal_info.position }}
                <br>{{resume_data.personal_info.institute}}</h4>
              <hr>
              <h3 class="inverse-color pulse">
                <span class="rotate">DEVELOPER, ENGINEER, CREATOR, DESIGNER</span>
              </h3>
            </div>
          </div>
          <div class="col-lg-6 hidden-xs slideLeft">
            <div class="container-fluid">
              <h1 class="super-heading inverse-color">Hi,</h1>
              <h4 class="inverse-color text-justify">
                I am currently pursuing a Masters in Computer Engineering, (MAY 2020) at San Jose State University,
                California. My primary areas of interest include Web Application Development, Full Stack Engineering.
                <br>
                <br>
                I have 3+ years of experience as a Software Engineer (Programmer Analyst) at Cognizant, India where I
                developed and maintained multi-layered web applications for the IT security teams. I have interned at a
                Health Care startup as a Full Stack Engineer in Silicon Valley.
                <br>
                <br>
                I am proficient in web technologies based on JavaScript and have worked with C#, JAVA, and Python
                before. I enjoy developing web applications and I am skilled in HTML5, CSS, JavaScript and know
                frameworks like Angular and ReactJS.
                Additionally, I have experience in writing SQL queries and backend.
                <br>
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div id="upbutton" class="container-fluid bottom-fixed">
        <div class="container vertically-center text-center">
          <a class="anchor-up-button" href="#skills">
            <h2 class="up-button">
              <span class="glyphicon glyphicon-menu-up"></span>
            </h2>
          </a>
        </div>
      </div>

      <div class="contact-card">
        <div class="container inverse-color">
          <h1>{{resume_data.personal_info.first_name}} {{resume_data.personal_info.last_name}}</h1>
          <h3>{{resume_data.personal_info.city}}, {{resume_data.personal_info.state}}.</h3>
          <div style="display: inline-flex;">
            <h4><a href="mailto:{{resume_data.personal_info.email[0]}}"
                class="email">{{resume_data.personal_info.email[0]}} |</a></h4>
            <h4><a href="mailto:{{resume_data.personal_info.email[1]}}"
                class="email">{{resume_data.personal_info.email[1]}}</a></h4>
          </div>
          <h4> {{resume_data.personal_info.tel}}</h4>

          <hr>

          <div class="container-fluid text-center">
            <div style="display: -webkit-inline-box;" ng-repeat="(key, data) in resume_data.links">
              <a title="{{key}}" ng-repeat="item in data" class="no-decoration social-links" href="{{item.link}}"
                target="_blank">
                <i class="{{item.icon}}"></i>
              </a>
            </div>
            <span style="float: right;margin-top: 20px;">Total Page Visits: <?php echo $visits ?></span>
          </div>
        </div>
      </div>
    </div>
    <!--skills pane-->
    <div id="skills" class="section">
      <div class="container">
        <h1 class="center-block">Skills I picked up along the way</h1>
        <hr>
        <div class="row">
          <div class="col-lg-6">
            <br>
            <h2>Core</h2>
            <br>
            <h4>C++</h4>
            <div class="progress flat-bar">
              <div id="cpp_progress" class="progress-bar progress-bar-danger" role="progressbar">
              </div>
            </div>
            <h4>C#</h4>
            <div class="progress flat-bar">
              <div id="csharp_progress" class="progress-bar progress-bar-danger" role="progressbar">
              </div>
            </div>
            <h4>JAVA</h4>
            <div class="progress flat-bar">
              <div id="java_progress" class="progress-bar progress-bar-danger" role="progressbar">
              </div>
            </div>
            <h4>Python</h4>
            <div class="progress flat-bar">
              <div id="python_progress" class="progress-bar progress-bar-danger" role="progressbar">
              </div>
            </div>
            <h4>SQL</h4>
            <div class="progress flat-bar">
              <div id="sql_progress" class="progress-bar progress-bar-danger" role="progressbar">
              </div>
            </div>
            <h4>NoSQL</h4>
            <div class="progress flat-bar">
              <div id="nosql_progress" class="progress-bar progress-bar-danger" role="progressbar">
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <br>
            <h2>Web Technologies</h2>
            <br>
            <h4>JavaScript</h4>
            <div class="progress flat-bar">
              <div id="js_progress" class="progress-bar progress-bar-danger" role="progressbar">
              </div>
            </div>
            <h4>Angular JS</h4>
            <div class="progress flat-bar">
              <div id="angular_progress" class="progress-bar progress-bar-danger" role="progressbar">
              </div>
            </div>
            <h4>ReactJS</h4>
            <div class="progress flat-bar">
              <div id="react_progress" class="progress-bar progress-bar-danger" role="progressbar">
              </div>
            </div>
            <h4>Node.js</h4>
            <div class="progress flat-bar">
              <div id="node_progress" class="progress-bar progress-bar-danger" role="progressbar">
              </div>
            </div>
            <h4>MVC</h4>
            <div class="progress flat-bar">
              <div id="mvc_progress" class="progress-bar progress-bar-danger" role="progressbar">
              </div>
            </div>
            <h4>Ionic Framework</h4>
            <div class="progress flat-bar">
              <div id="ionic_progress" class="progress-bar progress-bar-danger" role="progressbar">
              </div>
            </div>
            <h4>Bootstrap</h4>
            <div class="progress flat-bar">
              <div id="bootstrap_progress" class="progress-bar progress-bar-danger" role="progressbar">
              </div>
            </div>
            <h4>PHP</h4>
            <div class="progress flat-bar">
              <div id="php_progress" class="progress-bar progress-bar-danger" role="progressbar">
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2>Other things I know</h2>
          <hr>
          <div class="skillbox" ng-repeat="skill in resume_data.things_i_know">
            <h4>{{skill}}</h4>
          </div>
        </div>
        </br>
      </div>
    </div>


    <!--timeline pane-->
    <div id="timeline" class="section">
      <div class="container">
        <h1>My Timeline</h1>
        <hr>
        <ul class="timeline" ng-repeat="(time, data) in resume_data.timeline">
          <li>
            <div class="tldate">{{time}}</div>
          </li>
          <li ng-repeat="item in data" ng-class="{'timeline-inverted': $parent.$index % 2 === 0}">

            <div class="tl-circ"></div>
            <div class="timeline-panel">
              <div class="tl-heading">
                <h4>{{item.title}}</h4>
              </div>
              <div class="tl-body">
                <br>
                <p ng-repeat="line in item.desc">- {{line}}</p>
              </div>
              <div class="tl-heading" ng-if="item.link">
                <h5><a style="font-family: cursive; text-decoration: underline;" href="{{item.link}}"
                    target="_blank">Link - {{item.link_desc}}</a></h5>
              </div>
            </div>
          </li>

        </ul>
      </div>

    </div>

    <div id="contactemail" class="section">
      <div class="container contact-container">
        <div style="text-align:center">
          <h1>Hire Me</h1>
          <hr/>
        </div>
        <form name="contactform" class="contact-form" method="POST">
          <div class="row">
            <div class="column leftCol">
              <label for="fname">First Name</label>
              <input type="text" id="fname" required="" name="firstname" ng-model="form.firstname" placeholder="Your name..">
            </div>

            <div class="column">
              <label for="lname">Last Name</label>
              <input type="text" id="lname" required="" name="lastname" ng-model="form.lastname" placeholder="Your last name..">
            </div>
          </div>


          <div class="row">
            <div class="column leftCol">
              <label for="email">Email ID</label>
              <input type="email" id="email" required="" name="email" ng-model="form.email" placeholder="Your Email Id">
            </div>
            <div class="column">
              <!-- <label for="attachment">Attachment (if any)</label>
              <input type="file" class="form-control" id="attachment" ng-model="form.attachment" name="attachment"> -->
            </div>
          </div>


          <div class="row">
            <label for="subject">Subject</label>
            <input type="text" id="subject" name="subject" required="" ng-model="form.subject" placeholder="Subject">

            <label for="message">Message Me</label>
            <textarea id="message" name="message" required="" ng-model="form.message"  placeholder="Write something..."></textarea>
          </div>

            <div style="text-align:center;">  
              <button name="contactPost" type="submit" style="font-size: large;" ng-click="submit(contactform.$valid);">Send</button>
              </div>
        </form>
      </div>
    </div>

    <div id="contact">
      <br>
    </div>

    <!--gototop button-->
    <div class="top-button text-center hidden-xs">
      <a href="#top">
        <h3 id="glyph-arrow" class="inverse-color">
          <span class="glyphicon glyphicon-menu-up"></span>
        </h3>
      </a>
    </div>
  </div>

  <script src="js/scriptPolarClock.js"></script>

</body>

</html>