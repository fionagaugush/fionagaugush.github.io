$(document).ready(function() {

var aboutSection = document.getElementById("aboutSection");
var projectsSection = document.getElementById("projectSection");
var contactSection = document.getElementById("contactSection");

var contactButton = document.getElementById("contactButton");
var aboutButton = document.getElementById("aboutButton");
var projectsButton = document.getElementById("projectsButton");

var aboutTitle = document.getElementById("aboutTitle");
var projectsTitle = document.getElementById("projectsTitle");
var contactTitle = document.getElementById("contactTitle");

contactButton.addEventListener("click", function() {
    contactSection.scrollIntoView({behavior: "smooth"});  
  });
aboutButton.addEventListener("click", function() {
    aboutSection.scrollIntoView({behavior: "smooth"});  
  }); 
projectsButton.addEventListener("click", function() {
    projectsSection.scrollIntoView({behavior: "smooth"});  
  }); 






function update(){
    var aboutSectionPosition = aboutSection.getBoundingClientRect();
    var contactSectionPosition = contactSection.getBoundingClientRect();
    var projectsSectionPosition = projectsSection.getBoundingClientRect();

    console.log(aboutSectionPosition.top)
   

    if (    aboutSectionPosition.top < 100 &  aboutSectionPosition.top > -aboutSectionPosition.height/2){
        aboutButton.style.fontWeight = "bold"
    }
    else {
        aboutButton.style.fontWeight = "normal"
    }


    if (contactSectionPosition.top < projectsSectionPosition.height/2){
        contactButton.style.fontWeight = "bold"
    }
    else {
        contactButton.style.fontWeight = "normal"
    }

    if (projectsSectionPosition.top <  aboutSectionPosition.height/2 &  projectsSectionPosition.top > -projectsSectionPosition.height/2){
        projectsButton.style.fontWeight = "bold"

    }

    else{
        projectsButton.style.fontWeight = "normal"
    }
}


document.addEventListener("scroll", update);
update();

  
})
