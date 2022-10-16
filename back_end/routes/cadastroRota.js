const router = require('express').Router()
const User = require('../models/User')

router.post('/', async (req, res) => {

  const { firstName, lastName, username, email, password, number, gender } = req.body

  const user = {
    firstName,
    lastName,
    username,
    email,
    password,
    number,
    gender
  }

  const findUsername = await User.findOne({ username: user.username })
  const findEmail = await User.findOne({ email: user.email })
  const findNumber = await User.findOne({ number: user.number })


  if (!firstName || !username || !email || !password || !number || !gender) {
    res.status(422).json({ error: 'é obrigatório o preenchimento de todos os dados!' })
    return
  }

  if (findUsername) {
    res.status(422).json({ error: 'Nome de usuário indisponível!' })
    return
  } else if (findEmail) {
    res.status(422).json({ error: 'Email indisponível!' })
    return
  } else if (findNumber) {
    res.status(422).json({ error: 'Celular indisponível!' })
    return
  }

  try {
    await User.create(user)

    res.status(201).json({ message: 'Usuário cadastrado com sucesso!', user })

  } catch (err) {
    res.status(500).json({ error: err })
  }

})

module.exports = router
