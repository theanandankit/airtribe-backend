const express = require("express"); 

const app = express(); 
app.use(express.json());

const db = require('./Utils/db');
const sequelize = require('./Utils/db_init'); 

const data_init = require("./Utils/InitialData");

db.db_relation_int();

const routeCourses = require("./Controller/CourseController");
const routeComments = require("./Controller/CommentController");
const routeLeads = require("./Controller/LeadController");
const routeInstructor = require("./Controller/InstructorController");
const routeLearner = require("./Controller/LearnerController");


app.use("/course", routeCourses);
app.use("/lead", routeLeads);
app.use("/comment", routeComments);
app.use("/instructor", routeInstructor);
app.use("/learner", routeLearner);

app.get("/init", (req, res) => {
    data_init.init().then(() => {
        res.status(200).send({message: "Successfully added initial data"});
    }).catch (err => {
        console.log(err);
        res.status(500).send({message: "Something went wrong"})
    })
})

app.listen(3000, () => {
    data_init.init();
    console.log("Server is Running"); 
})