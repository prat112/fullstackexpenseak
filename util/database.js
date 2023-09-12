const Sequelize = require('sequelize');
const sequelize = new Sequelize('expense-table','root','Karthik@26',{
    dialect:'mysql',host:'localhost'
});

module.exports = sequelize;