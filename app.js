const express = require('express')  //Como eu tenho o express instalado neste arquivo, não preciso digitar o caminho, pois o node já encontra.

const app = express() //A variável está recebendo todo o atributo da variável 'express' que tem o modulo

/* Conexão com o banco de dados MYSQL */
const mysql = require('mysql')  //Como eu tenho o express instalado neste arquivo, não preciso digitar o caminho, pois o node já encontra.


const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'isaias',
    password : '23022008Nyco',
    database: 'bd_estacao_santana'
  });

  connection.connect(function(err) {
      if (err) {console.error('Erro ao realizar a conexão com BD: ' + err.stack)} return
  })



connection.query("DELETE FROM contato WHERE id = 3;", function(err, result) {
    if (!err) {
        console.log('Registro excluído com sucesso!')
    } else {
        console.log('Não foi possível excluir o registro! Erro: '  + err)
    }
})


/*



  

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