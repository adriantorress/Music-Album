const router = require('express').Router()
const User = require('../models/User')

router.post('/', async (req, res) => {

  const { username, email, password, number } = req.body

  const user = {
    username,
    email,
    password,
    number
  }

  const findUsername = await User.findOne({ username: user.username })
  const findEmail = await User.findOne({ email: user.email })
  const findNumber = await User.findOne({ number: user.number })


  if ((!username || !password) && (!email || !password) && (!number || !password)) {
    res.status(422).json({ ok: false, error: 'é obrigatório o preenchimento de todos os dados!' })
    return
  }
  else {
    if (!findUsername && !findEmail && !findNumber) {
      res.status(422).json({ ok: false, error: 'Esse usuário não existe!' })
      return
    }
    else if (findUsername?.password === password || findEmail?.password === password || findNumber?.password === password) {
      try {

        res.json({ ok: true, message: 'Usuário logado com sucesso!' })

      } catch (err) {
        res.status(500).json({ ok: false, error: err })
      }
    }
  }


})

module.exports = router
