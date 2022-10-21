const express = require("express");
const route = express.Router();

const leadService = require('../Services/LeadService');

route.get("/search", (req, res) => {
    res.send("search"); 
});

route.post("/update", (req, res) => {
    
    let data = leadService.updateLead(req.body);

    if (data != null) {
        res.status(200).json({message: 'Lead has been Successfully updated'});
    } else 
        res.status(400).send({message: 'Something went wrrong'});
});

route.post("/add", (req, res) => {
    let data = leadService.addLead(req.body);

    if (data != null) {
        res.status(200).json({message: 'Lead has been Successfully added'});
    } else 
        res.status(400).send({message: 'Something went wrrong'}); 
});

module.exports = route; 