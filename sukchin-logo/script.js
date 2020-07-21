document.querySelector(".star5").appendChild(Shape.star({ side: 5, width: 50, stroke: "#ccc", strokeWidth: 2 }));
document.querySelector(".polygon6").appendChild(Shape.poly({ side: 6, width: 50, stroke: "#ccc", strokeWidth: 2 }));
document.querySelector(".triangle").appendChild(Shape.poly({ side: 3, width: 50, stroke: "#ccc", strokeWidth: 2 }));

const mainScene = new Scene({
  ".line-top": {
    0: {
      transform: "translateY(-100%) scaleY(1)" },

    1: {
      transform: "translateY(0%) scaleY(0)" },

    options: {
      easing: "ease-in" } },


  ".circle1": {
    0: {
      "border-width": "100px",
      "transform": "scale(0)" },

    0.9: {
      opacity: 1 },

    1: {
      "border-width": "0px",
      "transform": "scale(1)",
      "opacity": 0 },

    options: {
      delay: 1.5 } },


  ".circle2": {
    0: {
      "border-width": "200px",
      "transform": "scale(0)" },

    0.3: {
      opacity: 1 },

    0.9: {
      "border-width": "0px",
      "transform": "scale(1)",
      "opacity": 0 },

    2: 1,
    options: {
      delay: 2.6 } },


  ".rectangle": {
    0: {
      opacity: 0,
      transform: "translate(-50%, -50%) rotate(30deg) translate2(0px) scale(0.3)" },

    0.1: {
      opacity: 1 },

    1: {
      opacity: 1 },

    1.5: {
      transform: "rotate(0deg) translate2(-100px) scale(1)",
      opacity: 0 },

    options: {
      delay: 4 } },


  ".star5": {
    0: {
      opacity: 0,
      transform: "translate(-50%, -50%) translate2(0px, 0px) rotate(0deg) scale(0.3)" },

    0.1: {
      opacity: 1 },

    1: {
      opacity: 1 },

    1.5: {
      transform: "rotate(150deg) translate2(-5px, -98px) scale(1)",
      opacity: 0 },

    options: {
      delay: 4 } },


  ".circle3": {
    0: {
      opacity: 0,
      transform: "translate(-50%, -50%) translate2(0px, 0px) rotate(0deg) scale(0.3)" },

    0.1: {
      opacity: 1 },

    1: {
      opacity: 1 },

    1.5: {
      transform: "rotate(150deg) translate2(95px, -40px) scale(1)",
      opacity: 0 },

    options: {
      delay: 4 } },


  ".polygon6": {
    0: {
      opacity: 0,
      transform: "translate(-50%, -50%) translate2(0px, 0px) rotate(0deg) scale(0.3)" },

    0.1: {
      opacity: 1 },

    1: {
      opacity: 1 },

    1.5: {
      transform: "rotate(150deg) translate2(75px, 75px) scale(1)",
      opacity: 0 },

    options: {
      delay: 4 } },


  ".triangle": {
    0: {
      opacity: 0,
      transform: "translate(-50%, -50%) translate2(0px, 0px) rotate(0deg) scale(0.3)" },

    0.1: {
      opacity: 1 },

    1: {
      opacity: 1 },

    1.5: {
      transform: "rotate(-150deg) translate2(-40px, 90px) scale(1)",
      opacity: 0 },

    options: {
      delay: 4 } },


  ".d-back": i => ({
    transform: {
      scaleX: [0, 1] },

    options: {
      duration: 1,
      delay: 2.8 + i * 0.4 } }),


  ".character span": i => ({
    0: {
      transform: "translate(-100%)" },

    1: {
      transform: "translate(0%)" },

    options: {
      delay: 3.1 + i * 0.4 } }),


  ".glitter": i => ({
    0: {
      width: "0px",
      transform: {
        rotate: `${360 / 8 * i}deg`,
        translate: "0px",
        scaleX: 1 },

      opacity: 0 },

    0.5: {
      width: "50px",
      opacity: 1 },

    1: {
      width: "0px",
      transform: {
        translate: "100px",
        scaleX: 0 },

      opacity: 0 },

    options: {
      delay: 2 } }) },


{
  easing: "ease-out",
  selector: true,
  iterationCount: "infinite" }).
playCSS();

