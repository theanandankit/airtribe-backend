const express = require("express");
const route = express.Router();

const instructorService = require('../Services/InstructorService');

route.post("/add", (req, res) => {
    let data = instructorService.addInstructor(req.body);

    if (data != null) {
        res.status(200).json({message: 'Instructor has been Successfully added'});
    } else 
        res.status(400).send({message: 'Something went wrrong'}); 
});

module.exports = route; 