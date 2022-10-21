const Sequelize = require("sequelize");
const sequelize = require("../Utils/db_init");

const comment = sequelize.define("comment", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },

    comment_value: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    lead_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },

});

module.exports = comment;