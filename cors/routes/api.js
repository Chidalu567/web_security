const express = require("express"); //require express from the node modul
const router = express.Router(); //create an express router
const fs = require("fs"); //require fs from node ,odule
const path = require("path"); //require path from node module

const homePage = fs.readFileSync(
  path.join(path.resolve("cors"), "static", "index.html")
); //readfile synchronously

router.use("/", express.static("../static")); //middleware to use static files for this url

router.get("/", (req, res) => {
  res.status(200).send(homePage); //write to the client with status of 200
  res.end(); //end response
}); //get method

module.exports = router; //export data for external file
