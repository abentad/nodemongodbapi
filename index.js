//for express server
const express = require("express");
const app = express();
//for mongodb database
const mongoose = require("mongoose");
//for the environment variable so our user name and password on the mongodb url wont be pushed to github
require("dotenv/config");
//for reading the body using the parser
const bodyParser = require("body-parser");
app.use(bodyParser.json());

//import routes from the routes folder
const postRoute = require("./Routes/posts");
const { populate } = require("./models/Post");

app.use("/posts", postRoute);

//Routes
app.get("/", (req, res) => {
  res.send("hello world");
});

//connect to database mongodb
mongoose.connect(
  //gets the url from the .env file
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("connected to db.")
);

//express app listen port
app.listen(3000, () => {
  console.log("listening at port 3000");
});
