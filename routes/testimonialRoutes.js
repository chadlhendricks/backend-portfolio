const express = require("express");
const router = express.Router();

const testimonial = [
  {
    src: "https://iili.io/0rDsuS.png",
    alt: "Godwin Dzvapatsva",
    label: "- Godwin Dzvapatsva -Head of Curriculum and Learning",
    caption: "Chad has the potential to do well is his studies.",
  },
  {
    src: "https://iili.io/0rDLw7.png",
    alt: "Sergio Rodgers",
    label: "- Sergio Rodgers",
    caption:
      "In the short time I’ve know Chad I’ve come to see how good he is at adapting to new things and how good he is at socialising with peers. Chad is an amazing Individual that is committed and he would be an amazing asset to any company.",
  },
  {
    src: "https://iili.io/0rDtne.png",
    alt: "Daryll Grainger",
    label: "- Daryll Grainger",
    caption:
      "Chad is great at what he does.",
  },
  {
    src: "https://iili.io/0rDDMu.png",
    alt: "Siyanda Ncamazana",
    label: "- Siyanda Ncamazana",
    caption:
      "Chad is an extremely hard worker and is open minded learning new things. He is not afraid of challenges and is willing to go the extra mile.",
  },
  {
    src: "https://iili.io/1adgEX.png",
    alt: "Siyabonga Mkhosana",
    label: "Siyabonga Mkhosana",
    caption:
      "Chad Hendricks has shown a capacity to learn quick and work efficiency, has a good work ethic and ability to work in a team. Very dependable and committed.",
  },
  
];

router.get("/", (req, res) => {
  res.send(testimonial);
});

module.exports = router;
