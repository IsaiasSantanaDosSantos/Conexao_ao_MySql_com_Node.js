const express = require('express') //Inclui o 'express' com o 'require' e atribui a uma variável
const app = express() //Atribui uma estáncia do express a uma variável
const handlebars = require('express-handlebars') //Inclui o 'handlebars' com o 'require' e atribui a uma variável
const bodyParser = require("body-parser") //Inclui o 'body-parser' com o 'require' e atribui a uma variável
const pagamento = require('./models/Pagamento')

//Para carregar a página
    app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')
    //Configurações do body-parser
    
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())

    //Rotas
    app.get('/cad-pagamento', function(req, res) {
        res.render('cad-pagamento')
    })

    app.get('/pagamento', function(req, res) {
        res.render('pagamento')
    })

    app.post('/add-pagamento', function(req, res) {
        pagamento.create({
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

app.listen(8080) //Executa o servidor







/*
const Sequelize = require('sequelize');  //Incluindo o Sequelize e atribuindo a uma variável
*/

//Conectando ao banco de dados
/*
const sequelize = new Sequelize('bd_estacao_santana', 'isaias', '23022008Nyco', {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate().then(function(){
    console.log('Conexão realizada com sucesso!')
}).catch(function(err){
    console.log('Erro ao realizar a conexão com BD: ' + err)
});
*/

/* Final código de conexão ao BD */

/* Crianda uma tabela no banco de dados */
/*
const User = sequelize.define('salarios', {
    nome: {
        type: Sequelize.STRING
    },
    valor: {
        type: Sequelize.DOUBLE
    }
})
*/

//User.sync({force: true})
/* Final do código de criação da tabela */

/* Código para inserir registros na tabela criada */
/*
User.create({
    nome: 'Isaias Santana',
    valor: 1385
})

*/






/*
const express = require('express')  //Como eu tenho o express instalado neste arquivo, não preciso digitar o caminho, pois o node já encontra.

const app = express() //A variável está recebendo todo o atributo da variável 'express' que tem o modulo

  connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
   
    console.log('connected as id ' + connection.threadId);
  });


  connection.query('SELECT * FROM autor_tcu', function(err, rows, fields) {
      if(!err) {
          console.log('Resultado: ', rows)
      } else {
          console.log('Erro ao realizar a consulta')
      }
  })
  


app.get("/", function(req, res) { //A página que queri abrir. O '/' significa pasta home/raiz. 
    res.sendFile(__dirname + "/src/index.html") //O que vai aparecer na página, o '__dirname' substitui o resto do caminho do arquivo deste a pasta raiz do PC
})

app.get("/sobre", function(req, res) { //A página que queri abrir. O '/' significa pasta home/raiz + sobre. 
    res.sendFile(__dirname + "/src/sobre.html") //O que vai aparecer na página, o '__dirname' substitui o resto do caminho do arquivo deste a pasta raiz do PC
})

app.get("/portifolio", function(req, res) { //A página que queri abrir. O '/' significa pasta home/raiz + portifolio. 
    res.send("Conheça nossos outros projetos.") //O que vai aparecer na página
})

app.get("/contato", function(req, res) { //A página que queri abrir. O '/' significa pasta home/raiz + contato. 
    res.send("Contato do Gerenciador financeiro") //O que vai aparecer na página
})

//localhost:8080
app.listen(8080) //Iniciar servidor

//Aula #5 instalação do Nodemon para atualizar o servidor automaticamente.
*/





/* Conexão com o banco de dados MYSQL */
/*
const mysql = require('mysql')  //Como eu tenho o express instalado neste arquivo, não preciso digitar o caminho, pois o node já encontra.


const connection = mysql.createConnection({
    host     : 'localhost',           //Sevidor
    user     : 'isaias',              //Usuário
    password : '23022008Nyco',        //Senha
    database: 'bd_estacao_santana'    //Nome banco de dados
  });

  connection.connect(function(err) {      //Função para conectar ao banco
      if (err) {console.error('Erro ao realizar a conexão com BD: ' + err.stack)} return
  })
  */

/* FINAL CONEXÃO COM O BANCO DE DADOS MYSQL */


/* MANIPULANDO DADOS NO BANCO DE DADOS */
/*
connection.query("UPDATE contato SET nome = 'Isaias Santana dos Santos' WHERE ID =1;", function(err, result) {
    if (!err) {
        console.log('Registro atualizado com sucesso!')
    } else {
        console.log('Não foi possível atualizar o registro! Erro: '  + err)
    }
})  
*/