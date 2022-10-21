const express = require("express");
const route = express.Router();

const instructorService = require('../Services/InstructorService');

route.post("/add", (req, res) => {

    instructorService.addInstructor(req.body).then( data => {
        
        if (data) {
            res.status(200).json({
                message: 'Instructor has been Successfully added'
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