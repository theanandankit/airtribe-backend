const express = require("express");
const route = express.Router();

const courseService = require('../Services/CourseService');

route.post("/create", (req, res) => {
    let data = courseService.addCourse(req.body);
    
    if (data != null) {
        res.status(200).json({message: 'Course has been Successfully added'});
    } else 
        res.status(400).send({message: 'Something went wrrong'});
});

route.post("/update", (req, res) => {
    let data = courseService.updateCourse(req.body);

    if (data != null) {
        res.status(200).json({message: 'Course has been Successfully Updated'});
    } else 
        res.status(400).send({message: 'Something went wrrong'});
});

module.exports = route;