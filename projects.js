
 $(document).ready(function() {
  const videos = [
    "images/travelsafe.png",
    "images/pawsperil.gif",
    "images/birdtutvideo.gif",
    "images/synth.gif"
  ];
  const titles = [
     "FileSafe",
      "Paws and Peril",
      "Bird Sounds of Central Park",
      "Web Audio Synth"
  ];
    const descriptions = [
        "<b>Safe storage of encrypted documents</b>.<br> An iOS app made with <b>Swift and Firebase</b>, using AES encryption for users to create, upload, and store sensitive documents. <br> Collaborator: S. Shao",
        "<b>Fighting and exploring game </b> A <b> Godot </b> based game where the player must fight off enemies and complete multiple levels. <br> Collaborators: M. Garza and S. Mohan ",
        "<b> Bird sound learning page</b><br> A page made with <b>Flask</b> that teaches users calls for birds local to Central Park. <br>  Collaborators: J. Gandi and A. Sanchez Octotlan",
        "<b> Web Audio Synth</b> <br> A synth made with <b> Web Audio API </b> with ability to change wave type, synthesis, partials, frequency, and index of modulation."

    ];
    const linksDemos =[
    "",
     "<a href = 'https://youtu.be/q__UOUh2yn8'><img src = 'images/tutorial.png'> </img> </a>",
      "<a href = 'https://youtu.be/IjjbSFo4r0I?si=gY0y7-SN2sMprDS4'> <img src = 'images/tutorial.png'> </img>  </a> ",
      ""




    ];
    const linksGitHub = [
     "<a href = 'https://github.com/fionagaugush/FileSafe'> <img src = 'images/code.png'> </img> </a> ",
      "<a href = 'https://github.com/fionagaugush/VideoGameFinal'> <img src = 'images/code.png'> </img> </a> ",
      "<a href = 'https://github.com/fionagaugush/UIDesignFinal'> <img src = 'images/code.png'> </img> </a> ",
      "<a href = 'https://codesandbox.io/p/sandbox/synth-r8ltrh?file=%2Findex.html%3A66%2C3'> <img src = 'images/code.png'> </img> </a> "



    ];

  let current = 0;
  const imgEl = document.getElementById("carousel");
  const rightArrow = document.getElementById("rightArrow");
  const leftArrow = document.getElementById("leftArrow");
  const titleEl = document.getElementById("title");
  const descriptionEl = document.getElementById("description");
  const codeEl = document.getElementById("code");
  const demoEl = document.getElementById("demo");


  rightArrow.addEventListener("click", () => {
    current = (current + 1) % videos.length;
     imgEl.src = videos[current];
     titleEl.innerHTML = titles[current];
     descriptionEl.innerHTML = descriptions[current];
     codeEl.innerHTML = linksGitHub[current];
     demoEl.innerHTML = linksDemos[current];




  });
   leftArrow.addEventListener("click", () => {
      current =  (current - 1 + videos.length) % videos.length;
        imgEl.src = videos[current];
       titleEl.innerHTML = titles[current];
       descriptionEl.innerHTML = descriptions[current];
       codeEl.innerHTML = linksGitHub[current];
       demoEl.innerHTML = linksDemos[current];
    });


  })