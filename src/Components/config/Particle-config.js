const particlesConfig={
    particles: {
      number: {
        value: 265,
        density: {
          enable: true,
          value_area: 552.4033491425909
        }
      },
      color: {
        value: "#717872"
      },
      shape: {
        type: "circle",
        stroke: {
          width: 1,
          color: "#717872"
        },
        polygon: {
          nb_sides: 8
        },
        image: {
          src: "img/github.svg",
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 1,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0,
          sync: false
        }
      },
      size: {
        value: 4.004324670644295,
        random: true,
        anim: {
          enable: false,
          speed: 189.81027084465578,
          size_min: 64.89240028877121,
          sync: false
        }
      },
      line_linked: {
        enable: false,
        distance: 160.17298682577183,
        color: "#ffffff",
        opacity: 0.6246746486205101,
        width: 0
      },
      move: {
        enable: true,
        speed: 1.5,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "bounce",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 600
        }
      }
    },
    interactivity: {
      detect_on: "window",
      events: {
        onhover: {
          enable: true,
          mode: "bubble"
        },
        onclick: {
          enable: true,
          mode: "repulse"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 133.84057559559062,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 158.17522570387982,
          size: 5,
          duration: 0.48669300216578404,
          opacity: 0.0081115500360964,
          speed: 3
        },
        repulse: {
          distance: 186.56565083021724,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    retina_detect: true
  };

export default particlesConfig;