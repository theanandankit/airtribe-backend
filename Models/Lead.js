const Sequelize = require("sequelize");
const sequelize = require("../Utils/db_init");

const lead = sequelize.define("lead", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },

    status: {
        type: Sequelize.INTEGER,
        allowNull: false,
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

module.exports = lead;;