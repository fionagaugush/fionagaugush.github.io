$(document).ready(function () {




// CARD CREATION
const projectsData = [
  {
    title: "FileSafe",
    image: "images/travelsafe.png",
    subtitle: "<b>Safe storage of encrypted documents</b>",
    description: "An iOS app made with <b>Swift and Firebase</b>, using AES encryption for users to create, upload, and store sensitive documents.<br>Collaborator: S. Shao",
    demo: "",
    github: "<a href='https://github.com/fionagaugush/FileSafe'> <button class= 'button right' > Code </button> </a>"
  },
  {
    title: "Paws and Peril",
    image: "images/pawsperil.gif",
    subtitle: "<b>Fighting and exploring game</b>",
    description: "A <b>Godot</b> based game where the player must fight off enemies and complete multiple levels.<br>Collaborators: M. Garza and S. Mohan",
    demo: "<a href='https://youtu.be/q__UOUh2yn8'> <button type='button'> Demo </button> </a>",
    github: "<a href='https://github.com/fionagaugush/VideoGameFinal'> <button class= 'button right' >  Code </button> </button>"
  },
  {
    title: "Central Park Birds",
    image: "images/birdtutvideo.gif",
    subtitle: "<b>Bird sound learning page</b>",
    description: "A page made with <b>Flask</b> that teaches users calls for birds local to Central Park.<br>Collaborators: J. Gandi and A. Sanchez Octotlan",
    demo: "<a href='https://youtu.be/IjjbSFo4r0I?si=gY0y7-SN2sMprDS4'><button type='button'>Demo</button></a>",
    github: "<a href='https://github.com/fionagaugush/UIDesignFinal'><button class= 'button right' > Code</button></a>"
  },
  {
    title: "Web Audio Synth",
    image: "images/synth.gif",
    subtitle: "<b>Synth</b>",
    description: "A synth made with <b>Web Audio API</b> with ability to change wave type, synthesis, partials, frequency, and index of modulation.",
    demo: "",
    github: "<a href='https://codesandbox.io/p/sandbox/synth-r8ltrh?file=%2Findex.html%3A66%2C3'><button class= 'button right' > Code</button></a>"
  }
];


//POPULATE CARDS


const container = document.querySelector('.projects-container');

projectsData.forEach(project => {
  const card = document.createElement('div');
  card.className = 'project-card';
  // Title
  const titleCard = document.createElement('div');
  titleCard.className = 'title-card';
  titleCard.innerHTML = project.title;
  card.appendChild(titleCard);

  // SubTitle
    const subtitle = document.createElement('div');
    subtitle.className = 'sub-title';
    subtitle.innerHTML = project.subtitle;
    card.appendChild(subtitle);


  // Image / Video
  if (project.image) {
    const img = document.createElement('img');
    img.src = project.image;
    img.alt = project.title;
    card.appendChild(img);
  }
    // Description
    const p = document.createElement('p');
    p.innerHTML = project.description;
    card.appendChild(p);

  // Links container
   const demo = document.createElement('div');
   demo.className = 'demo';
   const code = document.createElement('div');
   code.className = 'code';
  demo.innerHTML = project.demo;
  code.innerHTML = project.github;
  card.appendChild(demo);
  card.appendChild(code);

  container.appendChild(card);
});


//WELCOME CREATION
    let i = 0;
    let j = 0;

    const txt = "Hello! I'm Fiona";
    const txt2 = "I'm passionate about ";
    const txt3 = ['usability', 'accessibility', 'service', 'design'];

    const speed = 50;
    const typingSpeed = 80;
    const deletingSpeed = 50;
    const pause = 1000;

    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;






    function typeWriter() {

        // TYPE FIRST LINE
        if (i < txt.length) {
            $('#welcome-text').append(txt.charAt(i));
            i++;
            setTimeout(typeWriter, speed);
            return;
        }

        // PAUSE AFTER FIRST LINE
        if (i === txt.length && j === 0) {
            j++;
            setTimeout(typeWriter, 500);
            return;
        }

        if (j - 1 < txt2.length) {
            $('#welcome-desc-text').append(txt2.charAt(j - 1));
            j++;
            setTimeout(typeWriter, speed);
            return;
        }
        showArrow();

        cycleWords();
    }
    function showArrow() {
      const arrow = document.getElementById("arrowDown");
      arrow.classList.add("show");
    }

    window.addEventListener('scroll', () => {
   const arrow = document.getElementById("arrowDown");
   arrow.classList.add("hide");

        });




    function cycleWords() {
        const el = $('#welcome-desc-text-add');
        const currentWord = txt3[wordIndex];

        if (!isDeleting) {
            el.text(currentWord.substring(0, charIndex + 1));
            charIndex++;

            if (charIndex === currentWord.length) {
                setTimeout(() => isDeleting = true, pause);
            }
        } else {
            el.text(currentWord.substring(0, charIndex - 1));
            charIndex--;

            if (charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % txt3.length;
            }
        }

        setTimeout(
            cycleWords,
            isDeleting ? deletingSpeed : typingSpeed
        );
    }

    typeWriter();

   const arrow = document.getElementById('arrowDown');
   const homeClick = document.getElementById('click-home');
   const projectsClick = document.getElementById('click-projects');
   const aboutClick = document.getElementById('click-about');
  arrow.addEventListener('click', () => {
    const about = document.getElementById('about');
    console.log("clicked")
    about.scrollIntoView({ behavior: 'smooth',});
  });

   homeClick.addEventListener('click', () => {
        const welcome = document.getElementById('welcome');
        console.log("clicked")
        welcome.scrollIntoView({ behavior: 'smooth',});
      });
   projectsClick.addEventListener('click', () => {
        const welcome = document.getElementById('projects');
        console.log("clicked")
        welcome.scrollIntoView({ behavior: 'smooth',});
      });
   aboutClick.addEventListener('click', () => {
        const welcome = document.getElementById('about');
        console.log("clicked")
        welcome.scrollIntoView({ behavior: 'smooth',});
      });
});
