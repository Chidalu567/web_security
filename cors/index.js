//all imports
const express = require("express"); //require express from node module
const app = express(); //create an express application
const apiRouter = require("./routes/api"); //require file from external file
const cors = require("cors"); //require file from node modules

//cross origin resourse sharing (cors)
app.use(
  cors({
    origin: "localhost:3000/api/data",
    methods: ["PUT", "POST", "DELETE", "GET"],
    optionsSuccessStatus: 200,
  })
); //use cors in our site

//middleware definition
app.use(express.json()); //middleware to use express.json() in all routes
app.use(express.urlencoded({ extended: false })); //middle ware to user express.urlencoded extended false
app.use("/api/data", apiRouter); //middleware to use custom router

//server listening
app.listen(3000, "localhost", () => {
  console.log("server is listening on port 3000");
});
