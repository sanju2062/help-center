const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const app = express();
const port = 5000;

connectDB();

app.use(cors());
app.use(express.json()); // To parse JSON bodies
app.use(express.urlencoded({ extended: true })); // To parse URL-encoded bodies

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/createcard", require("./routes/createcard"));
app.use("/api/getcards", require("./routes/getcards"));
app.use("/api/getcard", require("./routes/getcard"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = app;
