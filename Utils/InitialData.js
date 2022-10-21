const instructor = require('../Models/Instructor');
const course = require('../Models/Course');
const learner = require('../Models/Learner');
const lead = require('../Models/Lead');
const comment = require('../Models/Comment');
const course_learner = require('../Models/course_learner');;

let init = async () => {

    console.log("sss");

    try {

        await instructor.create({name: "Ankit Kumar", organisation: "Airtribe", designation: "Intern", email: "ankit@airtribe.com", linkedIn_Profile: "linkedIn.com/ankit"});
        await instructor.create({name: "Rahul Kumar", organisation: "Airtribe", designation: "SDE1", email: "rahul@airtribe.com", linkedIn_Profile: "linkedIn.com/rahul"});
        await instructor.create({name: "Anit Singh", organisation: "Airtribe", designation: "SDE2", email: "amit@airtribe.com", linkedIn_Profile: "linkedIn.com/amit"});

        await course.create({name: "DSA course", max_seat: 10, start_date: "10 dec 2021", description: "Good Course", instructor_id: 1});
        await course.create({name: "ADV DSA course", max_seat: 11, start_date: "11 dec 2021", description: "Good Course", instructor_id: 2});
        await course.create({name: "Intermediate DSA course", max_seat: 12, start_date: "12 dec 2021", description: "Good Course", instructor_id: 2});
        await course.create({name: "Leadership course", max_seat: 13, start_date: "13 dec 2021", description: "Good Course", instructor_id: 3});
        await course.create({name: "Become leader course", max_seat: 14, start_date: "14 dec 2021", description: "Good Course", instructor_id: 1});

        await learner.create({name: "kamal garg", institute: "IIT G", designation: "Student", email: "kamal@gmail.com", phone: 123456789, linkedIn_Profile: "linkedIn.com/kamal"});
        await learner.create({name: "shivam kumar", institute: "IIIT G", designation: "Student", email: "ka@gmail.com", phone: 123456789, linkedIn_Profile: "linkedIn.com/kamal"});
        await learner.create({name: "Bhasker garg", institute: "ABV G", designation: "Student", email: "bhasker@gmail.com", phone: 123456789, linkedIn_Profile: "linkedIn.com/bhasker"});
        await learner.create({name: "Aayush singh", institute: "Indian institute of Technology", designation: "Student", email: "aayush@gmail.com", phone: 123456789, linkedIn_Profile: "linkedIn.com/aayush"});
        await learner.create({name: "Divyansh kumar", institute: "IIT G", designation: "Student", email: "divyansh@gmail.com", phone: 123456789, linkedIn_Profile: "linkedIn.com/divyansh"});
        await learner.create({name: "vasant rao", institute: "IIT G", designation: "Student", email: "vasant@gmail.com", phone: 123456789, linkedIn_Profile: "linkedIn.com/vasant"});
        await learner.create({name: "Dangi r", institute: "IIT G", designation: "Student", email: "dangi@gmail.com", phone: 123456789, linkedIn_Profile: "linkedIn.com/dangi"});
        await learner.create({name: "prashant", institute: "IIT G", designation: "Student", email: "prashant@gmail.com", phone: 123456789, linkedIn_Profile: "linkedIn.com/prashant"});
        await learner.create({name: "harshal", institute: "IIT G", designation: "Student", email: "harshal@gmail.com", phone: 123456789, linkedIn_Profile: "linkedIn.com/harshal"});

        await lead.create({status: 1, course_id: 2, learner_id: 1});
        await lead.create({status: 0, course_id: 3, learner_id: 2});
        await lead.create({status: 1, course_id: 3, learner_id: 3});
        await lead.create({status: 2, course_id: 4, learner_id: 4});
        await lead.create({status: 3, course_id: 2, learner_id: 5});

        await comment.create({comment_value: "Hello", lead_id: 1});
        await comment.create({comment_value: "H", lead_id: 2});
        await comment.create({comment_value: "bye", lead_id: 3});
        await comment.create({comment_value: "good", lead_id: 3});
        await comment.create({comment_value: "accepted", lead_id: 3});
        await comment.create({comment_value: "rejected", lead_id: 4});

        // relation table 
        await course_learner.create({course_id: 1, learner_id: 1});
        await course_learner.create({course_id: 4, learner_id: 2});
        await course_learner.create({course_id: 3, learner_id: 3});
        await course_learner.create({course_id: 1, learner_id: 3});
        await course_learner.create({course_id: 2, learner_id: 3});
        await course_learner.create({course_id: 1, learner_id: 4});
        await course_learner.create({course_id: 4, learner_id: 3});
        await course_learner.create({course_id: 5, learner_id: 2});
    } catch (err) {
        console.log(err);
    }

}

module.exports = {init};