const Sequelize = require('./db')
const db = require('./db')

const Pagamento = db.sequelize.define('pagamento', {
    nome: {
        type: db.Sequelize.STRING
    },
    valor: {
        type: db.Sequelize.DOUBLE
    }
})

//Criar a tabela
//Pagamento.sync({force: true}) //Execultar esse código apenas uma vez

module.exports = Pagamento