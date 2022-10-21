const express = require("express");
const route = express.Router();

const learnerService = require('../Services/LernerService');

route.post("/add", (req, res) => {
    let data = learnerService.addLearner(req.body);

    if (data != null) {
        res.status(200).json({message: 'learner has been Successfully added'});
    } else 
        res.status(400).send({message: 'Something went wrrong'}); 
});

module.exports = route; 