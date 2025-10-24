
 $(document).ready(function() {
  const images = [
    "images/travelsafe.png",
    "images/pawandperil.png",
    "images/birdvideo.gif"
  ];
  const titles = [
     "FileSafe",
      "Paws and Peril",
      "Bird Sounds of Central Park"
  ];
    const descriptions = [
        "Safe storage of encrypted documents. An iOS app made with Swift and Firebase.",
        "A fun fighting and exploring game made with Godot! <br> Collaborators: M. Garza and S. Mohan ",
        "An online page to help you learn the different calls of birds that can be found in Central Park. <br>  Collaborators: J. Gandi and A. Sanchez Octotlan"

    ];
    const linksDemos =[
    "",
     "<a href = 'https://youtu.be/q__UOUh2yn8'> Youtube Demo </a>",
      "<a href = 'https://youtu.be/IjjbSFo4r0I?si=gY0y7-SN2sMprDS4'> Youtube Demo </a> "




    ];
    const linksGitHub = [
     "<a href = 'https://github.com/fionagaugush/FileSafe'> Code </a> ",
      "<a href = 'https://github.com/fionagaugush/VideoGameFinal'> Code </a> ",
      "<a href = 'https://github.com/fionagaugush/UIDesignFinal'> Code </a> "


    ];

  let current = 0;
  const imgEl = document.getElementById("carousel");
  const rightArrow = document.getElementById("rightArrow");
  const leftArrow = document.getElementById("leftArrow")
  const titleEl = document.getElementById("title");
  const descriptionEl = document.getElementById("description");
  const codeEl = document.getElementById("code");
  const demoEl = document.getElementById("demo");

  rightArrow.addEventListener("click", () => {
    current = (current + 1) % images.length;
     imgEl.src = images[current];
     titleEl.innerHTML = titles[current];
     descriptionEl.innerHTML = descriptions[current];
     codeEl.innerHTML = linksGitHub[current];
     demoEl.innerHTML = linksDemos[current];




  });
   leftArrow.addEventListener("click", () => {
      current =  (current - 1 + images.length) % images.length;
       imgEl.src = images[current];
       titleEl.innerHTML = titles[current];
       descriptionEl.innerHTML = descriptions[current];
       codeEl.innerHTML = linksGitHub[current];
       demoEl.innerHTML = linksDemos[current];
    });


  })