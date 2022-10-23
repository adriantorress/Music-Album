const router = require('express').Router()
const User = require('../models/User')

router.post('/', async (req, res) => {

  const { ent, passwordLogin
  } = req.body

  const user = {
    ent,
    passwordLogin
  }

  const findUsername = await User.findOne({ username: user.ent })
  const findEmail = await User.findOne({ email: user.ent })
  const findNumber = await User.findOne({ number: user.ent })


  if (!ent || !passwordLogin) {
    res.status(422).json({ error: 'é obrigatório o preenchimento de todos os dados!' })
    return
  }
  else {
    if (!findUsername && !findEmail && !findNumber) {
      res.status(422).json({ error: 'Esse usuário não existe!' })
      return
    }
    else if (findUsername?.password === passwordLogin || findEmail?.password === passwordLogin || findNumber?.password === passwordLogin) {
      try {
        let usuario;

        if (findUsername) {
          usuario = findUsername
        }
        else if (findEmail) {
          usuario = findEmail
        }
        else { usuario = findNumber }

        const userToFront = JSON.parse(JSON.stringify(usuario))

        delete userToFront.password;

        res.json({ message: 'Usuário logado com sucesso!', userToFront })

      } catch (err) {
        res.status(500).json({ error: err })
      }
    }
    else {
      res.status(422).json({ error: 'Senha incorreta!' })
    }
  }


})

module.exports = router
