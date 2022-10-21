const express = require("express");
const route = express.Router();

route.get("/search", (req, res) => {
    res.send("search"); 
});

route.post("/update", (res, req) => {
    res.send("update"); 
});

route.post("/add", (req, res) => {
    res.send("add"); 
});

module.exports = route; 