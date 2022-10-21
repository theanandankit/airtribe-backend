const express = require("express");
const route = express.Router();

const leadService = require('../Services/LeadService');

route.post("/search", (req, res) => {

    leadService.searchLeadByEmailName(req.body).then( data => {

        if (data) {
            res.status(200).json(data);
        } else 
            res.status(400).send({
                message: 'Something went wrong: '
            });

    }).catch(err=>{
        console.error(err);
        res.status(500).send({
                message: 'Something went wrrong'
            });
    })
});

route.post("/update", (req, res) => {

    leadService.updateLead(req.body).then(data => {
        
        if (data) {
            res.status(200).json({
                message: 'Lead has been Successfully updated'
            });
        } else 
            res.status(400).send({
                message: 'Something went wrrong'
            });
    }).catch(err => {

        console.log(err);
        res.status(400).send({
            message: 'Something went wrrong'
        });
    })

});

route.post("/add", (req, res) => {

    leadService.addLead(req.body).then(data => {
        
        if (data) {
            res.status(200).json({
                message: 'Lead has been Successfully added'
            });
        } else 
            res.status(400).send({
                message: 'Something went wrrong'
            }); 
    }).catch(err => {

        console.log(err);
        res.status(400).send({
            message: 'Something went wrrong'
        });
    })
});

module.exports = route; 