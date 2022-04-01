const express = require("express");
const router = express.Router();

let resume = [
  {
    id: 1,
    year: "September 2021 - Present",
    institution: "Life Choices Coding Academy",
    role: "Full-Stack Developer Course",
  },
  {
    id: 2,
    year: "February 2020 - December 2020",
    institution: "Damelin",
    role: "Information and Technology (I.T) Course",
  },
  {
    id: 3,
    year: "June 2018 - August 2021",
    institution: "Amazon Development Center",
    role: "Account Management Specialist",
  },
  {
    id: 4,
    year: "August 2017 - February 2018",
    institution: "Blackburns Pharmacy",
    role: "Data Capturer",
  },
  {
    id: 5,
    year: "2015",
    institution: "Plumstead",
    role: "Graduated with a National Senior Certificate (NSC)",
  },
];

router.get("/", (req, res) => {
  res.send(resume);
});

module.exports = router;
