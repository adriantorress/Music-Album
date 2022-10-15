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
    res.status(422).json({ ok: false, error: 'é obrigatório o preenchimento de todos os dados!' })
    return
  }

  if (findUsername || findEmail || findNumber) {
    res.status(422).json({ ok: false, error: 'Usuário já cadastrado!' })
    return
  }

  try {
    await User.create(user)

    res.status(201).json({ ok: true, message: 'Usuário cadastrado com sucesso!' })

  } catch (err) {
    res.status(500).json({ ok: false, error: err })
  }

})

module.exports = router
