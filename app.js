let date = new Date();

let meridian;
let blink1 = document.querySelector('#blink1');
let blink2 = document.querySelector('#blink2');


async function displayTime(){
  
  let date = new Date();

  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();

  if (hh < 10){
    hh = '0' + hh;
  }

  meridian = 'AM';

  if (hh == 0){
    hh = 12;
  }
  
  if(hh >= 12){
    meridian = 'PM';
  }
  
  if (hh > 12){
    hh = hh - 12;
  }

  if ( !(ss%2) ){
    blink1.style.color = "rgba(54,57,71, 0)";
    blink2.style.color = "#1d2752";
  }else{
    blink1.style.color = "#1d2752";
    blink2.style.color = "rgba(54,57,71, 0)";
  }

  document.querySelector('#meridian').innerText = meridian;    
    
  if (mm < 10){
    mm = '0' + mm;
  }

  if (ss < 10){
    ss = '0' + ss;
  }

  document.querySelector('#hours').innerText = hh;
  document.querySelector('#minutes').innerText = mm;
  document.querySelector('#seconds').innerText = ss;

};
setInterval(displayTime, 1000);

/*JS code for the awesome particle effect
*/

particlesJS("particles-js", {
    
    particles: {
      number: {
        value: 100,
        density: { enable: true, value_area: 710.2665077774184 }
      },

      color: { value: "#102212" },

      shape: {
        type: "circle",
        stroke: { width: 0, color: "#000000" },
        polygon: { nb_sides: 5 },
        image: { src: "img/github.svg", width: 100, height: 100 }
      },

      opacity: {
        value: 0.5,
        random: true,
        anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
      },

      size: {
        value: 2,
        random: true,
        anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
      },

      line_linked: {
        enable: true,
        distance: 176.26510271448274,
        color: "#ffffff",
        opacity: 0.4,
        width: 1
      },

      move: {
        enable: true,
        speed: 3,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "bounce",
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 1200 }
      }
    },


    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "grab" },
        onclick: { enable: false, mode: "push" },
        resize: true
      },

      modes: {
        grab: { distance: 150, line_linked: { opacity: 1 } },
        bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 }
      }
    },

    retina_detect: true
});
var update;
  
update = function () {
    requestAnimationFrame(update);
};
  
requestAnimationFrame(update);

displayTime();