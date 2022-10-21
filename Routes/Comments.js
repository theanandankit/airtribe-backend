const express = require("express");
const route = express.Router();

const commentService = require('../Services/CommentService');

route.post("/add", (req, res) => {
    
    let data = commentService.addComment(req.body);

    if (data) {
        res.status(200).json({message: 'Comment has been Successfully added'});
    } else 
        res.status(400).send({message: 'Something went wrrong'});

});

module.exports = route; 

