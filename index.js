function newYearCountDown () {
    const newYearDate = new Date("January 1, 2024 00:00");
    const now = new Date();
       const diff = newYearDate - now; 

 const msInSecond = 1000;
 const msInMinute = 60*1000;
 const msInHour = 60*60*1000;
 const msInDay = 24*60*60*1000;

 const displayDay = Math.floor(diff/msInDay);
  document.querySelector(".days").textContent = displayDay;

 const displayHour = Math.floor((diff%msInDay) /msInHour);
  document.querySelector(".hours").textContent = displayHour;

  const displayMinute = Math.floor((diff%msInHour) /msInMinute);
  document.querySelector(".minutes").textContent = displayMinute;

  const displaySecond = Math.floor((diff%msInMinute) /msInSecond);
    document.querySelector(".seconds").textContent = displaySecond;

    if (diff <= 0) {
        document.querySelector(".days").textContent = 0;
        document.querySelector(".hours").textContent = 0;
        document.querySelector(".minutes").textContent = 0;
        document.querySelector(".seconds").textContent = 0;
        clearInterval(timerID);
     happyNewYear();
    } 
}
let timerID = setInterval(newYearCountDown, 1000);
function happyNewYear() {
const header = document.querySelector("h1");
header.textContent ="Wishing you life's best this New Year!";
header.classList.add("greeting");
}
const button = document.querySelector("#myButton");
const audio = document.querySelector("#myAudio");

button.addEventListener("click", function() {
    if (audio.paused) {
        audio.play();
        button.classList.toggle("pause");
    }
    else{
        audio.pause();
        button.classList.toggle("pause");
    }
   
})

const searchInput = document.querySelector(".search");
const divs = document.querySelectorAll(".movie");

searchInput.addEventListener("keyup", function(event) {
const word = event.target.value.toLowerCase();

divs.forEach(item => {
    item.querySelector("p").textContent.toLowerCase().includes(word) ? (item.style.display ="block") : (item.style.display ="none");
    
})

})

particlesJS("particles-js", {
    particles: {
      number: { value: 1000, density: { enable: true, value_area: 1000 } },
      color: { value: "#fff" },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#000000" },
        polygon: { nb_sides: 2 },
        image: { src: "img/github.svg", width: 70, height: 70 }
      },
      opacity: {
        value: 0.9219619349976756,
        random: true,
        anim: { enable: false, speed: 3, opacity_min: 0.1, sync: false }
      },
      size: {
        value: 5,
        random: true,
        anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
      },
      line_linked: {
        enable: false,
        distance: 500,
        color: "#ffffff",
        opacity: 0.8,
        width: 3
      },
      move: {
        enable: true,
        speed: 3,
        direction: "bottom-left",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 1200 }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: false, mode: "repulse" },
        onclick: { enable: false, mode: "repulse" },
        resize: true
      },
      modes: {
        grab: { distance: 400, line_linked: { opacity: 0.5 } },
        bubble: { distance: 400, size: 4, duration: 0.3, opacity: 1, speed: 3 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 }
      }
    },
    retina_detect: true
  });
