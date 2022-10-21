const Sequelize = require("sequelize");

const course = require("../Models/Course");
const comment = require("../Models/Comment");
const course_learner = require("../Models/course_learner");
const instructor = require("../Models/Instructor");
const lead = require("../Models/Lead");
const learner = require("../Models/Learner");

const db_relation_int = (sequelize) => {

    // instructor and course ------ one to many relation
    instructor.hasMany(course, {foreignKey: 'instructor_id'});
    course.belongsTo(instructor, {foreignKey: 'instructor_id'});

    // courses and leads ------ one to many realtion
    course.hasMany(lead, {foreignKey: 'course_id'});
    lead.belongsTo(course, {foreignKey: 'course_id'});;

    // leads and comments ------- one to many relation
    lead.hasMany(comment, {foreignKey: 'lead_id'});
    comment.belongsTo(lead, {foreignKey: 'lead_id'});

    // course and learner ------- many to many relation
    course.belongsToMany(learner, {through: 'course_learner'});
    learner.belongsToMany(course, {through: 'course_learner'});

    learner.hasMany(lead, {foreignKey: 'learner_id'});
    lead.belongsTo(learner, {foreignKey: 'learner_id'});
}

module.exports = {
    db_relation_int
};