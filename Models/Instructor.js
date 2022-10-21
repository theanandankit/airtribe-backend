const Sequelize = require("sequelize");
const sequelize = require("../Utils/db_init");

const instructor = sequelize.define("instructor", {
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
    organisation: {
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
    linkedIn_Profile: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

module.exports = instructor;