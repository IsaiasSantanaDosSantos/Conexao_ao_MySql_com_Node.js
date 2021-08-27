const Sequelize = require('sequelize')

const sequelize = new Sequelize('bd_estacao_santana', 'isaias', '23022008Nyco', {
    host:'localhost',
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}