const express = require("express");
const route = express.Router();

route.get("/add", (req, res) => {
    res.send("create"); 
});

module.exports = route; 

