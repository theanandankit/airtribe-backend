const express = require("express"); 

const app = express(); 
app.use(express.json());

const db = require('./Utils/db');
const sequelize = require('./Utils/db_init'); 

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
app.use("/learner", routeLearner)

app.listen(3000, () => {
    console.log("Server is Running"); 
})