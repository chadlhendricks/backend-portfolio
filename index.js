const express = require("express");
const cors = require("cors");
const resumeRoutes = require("./routes/resumeRoutes.js");
const projectRoutes = require("./routes/projectRoutes.js");
const testimonialRoutes = require("./routes/testimonialRoutes.js");

require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res, next) => {
  res.send({ msg: "Chad Hendricks Portfolio API" });
});

app.use("/resumes", resumeRoutes);
app.use("/projects", projectRoutes);
app.use("/testimonials", testimonialRoutes);


const port = process.env.PORT;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
