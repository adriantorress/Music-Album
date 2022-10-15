const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const DB_USER = process.env.DB_USER
const DB_PASS = encodeURIComponent(process.env.DB_PASSWORD)


app.use(express.urlencoded({ extended: true }))
app.use(express.json())


const cadastroRota = require('./routes/cadastroRota')
app.use('/sign', cadastroRota)


app.get('/', (req, res) => {

  res.json({ message: "Hello Express" })

})



mongoose
  .connect(
    `mongodb+srv://${DB_USER}:${DB_PASS}@apimusicalbum.bujgwdg.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log('MongoDB is connected!');
    app.listen(3000, () => {
      console.log('Server is running!')
    })
  })
  .catch((err) => console.log(err))