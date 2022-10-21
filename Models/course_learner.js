const Sequelize = require("sequelize");
const sequelize = require("../Utils/db_init");

const course_learner = sequelize.define("course_learner", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },

    course_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    learner_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }
});

module.exports = course_learner;