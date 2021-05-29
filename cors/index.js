//all imports
const express = require("express"); //require express from node module
const app = express(); //create an express application
const apiRouter = require("./routes/api"); //require file from external file
const cors = require("cors"); //require file from node modules
const https = require("https"); //require file from node module
const path = require("path"); //require path from node module
const fs = require("fs"); //require fs from node module

//cross origin resourse sharing (cors)
app.use(
  cors({
    origin: ["localhost:3000/api/data", "localhost:4000/api/people"],
    methods: ["PUT", "POST", "DELETE", "GET"],
    optionsSuccessStatus: 200,
  })
); //use cors in our site

//middleware definition
app.use(express.json()); //middleware to use express.json() in all routes
app.use(express.urlencoded({ extended: false })); //middle ware to user express.urlencoded extended false
app.use("/api/data", apiRouter); //middleware to use custom router

//create server
const server = https.createServer(
  {
    key: fs.readFileSync(path.join(__dirname, "key.pem")),
    cert: fs.readFileSync(path.join(__dirname, "cert.pem")),
  },
  app
); //create server

//server listening
server.listen(3000, "localhost", () => {
  console.log("server is listening on port 3000");
});

// server.listen(8080);
