---
layout: default
title: home
---
<script src="static/simplepage.js"></script>

<body>
<header>
    <ul>
        <li class = "name"> <a>  Fiona Gaugush </a> </li>
        <li>
            <a href = "https://github.com/fionagaugush"> <img src="images/github-mark.png" height="50"></a>
        </li>
        <li>    <a href = "https://www.linkedin.com/in/fiona-gaugush-4b7b511b9/"> <img src="images/InBug-Black.png" height="50"></a>
        </li>
</ul>
</header>
<div id="aboutSection" >
    <div id="aboutTitle" >
        Hello, I'm Fiona!
    </div>
    <div class="container-fluid">
        <div class="row">
        <div class="col-6">
                <div id="aboutText">
                    I recently graduated from Barnard College with a B.A. in Computer Science and a minor in English Literature. I have a wide range of experience including sofware development, education, and radio. I am very interested in the intersection of art, education, and tech. I am extremely proficent in Python, Java, SQL, C, Swift, and HTML. Check out my projects to learn more!
                </div>
            </div>
            <div class="col-6">
                <div id="portrait">
                    <img src="images/portrait.JPEG" width="70%" >
                </div>
            </div>
        </div>
    </div>
</div>
<div id="projectSection" class="container-fluid">
    <div class="row">
        <div class="col-md-4 d-flex align-items-center">
            <div id="projectsText">
                My <br> Projects
            </div>
        </div>
        <div class="col-md-8">
            <div class="carousel-wrapper">
                <div id="myCarousel" class="carousel slide" data-ride="carousel">
                    <!-- Indicators -->
                    <ol class="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <!-- Slide 1 -->
                        <div class="item active text-center">
                            <img src="images/travelsafe.png" class="carousel-img">
                            <div class="carousel-text">
                                <h3 color = "white">FileSafe</h3>
                                <p>Safe storage of encrypted documents. An iOS app made with Swift and Firebase. Created for COMS3997.</p>
                                <b>
                                    <p> For more information, check out our design document <a href = https://docs.google.com/document/d/1fDti2-6BAYaTBDuyXUKpx1w3ME1SH7w0dc8VTikJsKY/edit?usp=sharing> here </a> </p>
                                </b>
                                <p> Link to Github (contact for access)  <a href = https://github.com/Aristotle2003/TravelSafe> here </a></p>
                            </div>
                        </div>
                        <div class="item text-center">
                            <img src="images/pawandperil.png" class="carousel-img">
                            <div class="carousel-text">
                                <h3 class = "white">Paws and Peril</h3>
                                <p>A fun fighting and exploring game made with Godot! Collaborators: Melina Garza and Samara Mohan</p>
                                <p> Download the ZIP and run on Godot <a href = https://github.com/fionagaugush/VideoGameFinal> here! </a></p>
                            </div>
                        </div>
                        <div class="item text-center">
                            <img src="images/birdapp.png" class="carousel-img">
                            <div class="carousel-text">
                                <h3 class = "white">Bird Sounds of Central Park</h3>
                                <p>An online page to help you learn the different calls of birds that can be found in Central Park. This was a final project for COMS4170 at Columbia University. Collaborators: Jyothi Gandi and Angel Sanchez Octotlan</p>
                                <p> View  <a href = https://github.com/fionagaugush/UIDesignFinal> here </a></p>
                            </div>
                        </div>
                    </div>
                    <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                        <span class="glyphicon glyphicon-chevron-left"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="right carousel-control" href="#myCarousel" data-slide="next">
                        <span class="glyphicon glyphicon-chevron-right"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
</body>




