const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const DB_USER = process.env.DB_USER
const DB_PASS = encodeURIComponent(process.env.DB_PASSWORD)

var cors = require('cors');
app.use(cors());

app.use(express.urlencoded({ extended: true }))
app.use(express.json())


const cadastroRota = require('./routes/cadastroRota')
const loginRota = require('./routes/loginRota')

app.use('/sign-up', cadastroRota)
app.use('/sign-in', loginRota)

try {
  mongoose
    .connect(
      `mongodb+srv://${DB_USER}:${DB_PASS}@apimusicalbum.bujgwdg.mongodb.net/?retryWrites=true&w=majority`
    )
    .then(() => {
      console.log('MongoDB is connected!');
      var port_number = server.listen(process.env.$PORT || 3000);
      app.listen(port_number, () => {
        console.log('Server is running!')
      })
    })
    .catch((err) => console.log(err))
}
catch {
  console.log("Não foi possível efetuar a conexão ao banco de dados!")
}