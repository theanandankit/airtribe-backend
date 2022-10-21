const express = require("express");
const route = express.Router();

const courseService = require('../Services/CourseService');

route.post("/create", (req, res) => {

    courseService.addCourse(req.body).then( data => {
        
        if (data) {
            res.status(200).json({
                message: 'Course has been Successfully added'
            });
        } else 
            res.status(400).send({
                message: 'Something went wrong'
            });
    }).catch(err => {

        console.log(err);
        res.status(500).send({
            message: 'Something went wrong'
        });
    })
});

route.post("/update", (req, res) => {

    courseService.updateCourse(req.body).then( data => {
        
        if (data != null) {
            res.status(200).json({
                message: 'Course has been Successfully Updated'
            });
        } else 
            res.status(400).send({
                message: 'Something went wrong'
            });
    }).catch(err => {

        console.log(err);
        res.status(500).send({
            message: 'Something went wrong'
        });
    })
});

module.exports = route;