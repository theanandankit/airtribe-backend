const Sequelize = require("sequelize");

const sequelize = new Sequelize("airtribe", "root", "root", {
    dialect: "mysql",
    host: "localhost",
});

sequelize.sync({force: true}).then((result) => {
    console.log(result);
})
.catch((err) => {
    console.log(err);
})

module.exports = sequelize;