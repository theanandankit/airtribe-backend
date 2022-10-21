const Sequelize = require("sequelize");
const sequelize = require("../Utils/db_init");

const course = sequelize.define("course", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },

    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    max_seat: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    start_date: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    description: {
        type: Sequelize.STRING,
    },
    instructor_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
});

module.exports = course;