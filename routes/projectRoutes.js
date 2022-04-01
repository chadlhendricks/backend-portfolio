const express = require("express");
const router = express.Router();

let project = [
  {
    id: 1,
    projname: "Calculator",
    projdesc: "A calculator I made using Javascript.",
    github: "https://github.com/chadlhendricks/calculator",
    netlify: "https://youthful-wing-31cda1.netlify.app/",
    img: "https://iili.io/0wB9ou.png",
  },
  {
    id: 2,
    projname: "Point of Sale",
    projdesc: "Point of Sale",
    github: "https://github.com/chadlhendricks/blog-project",
    netlify: "https://gallant-bartik-9cde33.netlify.app/",
    img: "https://iili.io/E736tn.png",
  },
  {
    id: 3,
    projname: "eCommerce Demo Site",
    projdesc: "A demo eCommerce site with cart functionality.",
    github: "https://github.com/chadlhendricks/eCommerce-Store",
    netlify: "https://objective-noyce-a5bc16.netlify.app/",
    img: "https://iili.io/0wBJPj.png",
  },
  {
    id: 4,
    projname: "Luigi vs. Super Turtle Animation",
    projdesc: "A simple animation I made in CSS, pitting two of the fastest boys against one another.",
    github: "https://github.com/chadlhendricks/superturtlevsluigi",
    netlify: "https://dreamy-austin-afd27e.netlify.app/",
    img: "https://iili.io/0wBHMb.png",
  },
  {
    id: 5,
    projname: "Temperature Convertor",
    projdesc:
      "A temperature convertor that takes the input from the user and converts it to either Celsius or Fahrenheit",
    github: "https://github.com/chadlhendricks/Temperature_convertor",
    netlify: "https://elastic-snyder-7e4d0f.netlify.app/",
    img: "https://iili.io/0wB2Kx.png",
  },
  {
    id: 6,
    projname: "Demo Site",
    projdesc: "A demo site I created using the bootstrap framework.",
    github: "https://github.com/chadlhendricks/my-design-bootstrap",
    netlify: "https://optimistic-einstein-6a5fd3.netlify.app/",
    img: "https://iili.io/0wB3cQ.png",
  },
  ];

router.get("/", (req, res) => {
  res.send(project);
});


module.exports = router;
