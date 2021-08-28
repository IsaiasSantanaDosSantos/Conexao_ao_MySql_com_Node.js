const express = require('express') //Inclui o 'express' com o 'require' e atribui a uma variável
const app = express() //Atribui uma estáncia do express a uma variável

const handlebars = require('express-handlebars') //Inclui o 'handlebars' com o 'require' e atribui a uma variável
const bodyParser = require("body-parser") //Inclui o 'body-parser' com o 'require' e atribui a uma variável

const moment = require('moment')
const Pagamento = require('./models/Pagamento')



//Para carregar a página
    app.engine('handlebars', handlebars({
        defaultLayout: 'main',
        helpers: {
            formatDate: (date) => {
                return moment(date).format('DD/MM/YYYY')
            }
        }
    }))



    app.set('view engine', 'handlebars')
    //Configurações do body-parser
    
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())

    //Rotas
    app.get('/cad-pagamento', function(req, res) {
            res.render('cad-pagamento')
        })
        

    app.get('/pagamento', function(req, res) {
        Pagamento.findAll({order: [['id', 'DESC']]}).then(function(pagamentos) {
            res.render('pagamento', {pagamentos: pagamentos})
    })
})

    app.post('/add-pagamento', function(req, res) {
        Pagamento.create({
            nome: req.body.nome,   //Campo nome fo formulário
            valor: req.body.valor  //Campo valor do formulário
        }).then(function() {  //Coloco o 'then()' (Como se fosse o if) e incremento a função para retornar uma mensagem.
            res.redirect('/pagamento') //Pagina de rotorno
            //res.send('Cadastro realizado com sucesso!') //Msg de sucesso
        }).catch(function(err) { // O 'catch()' é como se fosse o else
            res.send('Erro! Cadastro NÃO realizado' + err)
        })
        //res.send('Nome: ' + req.body.nome + '<br>Valor: ' + req.body.valor + '<br>')
    })

    app.get('/del-pagamento/:di', function(req, res) {
        Pagamento.destroy({
            where: { 'id': req.params.id}
        }).then(function(){
            res.redirect('/pagamento')//Pagina de rotorno
            //res.send('Pagamento apagado com sucesso!') //Msg de sucesso
        }).catch(function(erro){
            res.send('Erro! Não foi possível apagar o pagamento.' + erro)
        })
    })

app.listen(8080) //Executa o servidor

/*
//Conexão com o BD
const mysql = require('mysql') 
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'isaias',
    password: '23022008Nyco',
    database: 'bd_estacao_santana'
})

connection.connect(function(err) {      //Função para conectar ao banco
    if (err) {console.error('Erro ao realizar a conexão com BD: ' + err.stack)} return
})


*/