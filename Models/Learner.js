const Sequelize = require("sequelize");
const sequelize = require("../Utils/db_init");

const learner = sequelize.define("learner", {
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
    institute: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    designation: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    phone: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    linkedIn_Profile: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

module.exports = learner;