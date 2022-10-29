const router = require('express').Router();
const Section = require('../models/Section')

router.post('/', async (req, res) => {

  const { id_section, href, title, name } = req.body

  const section = {
    id_section,
    href,
    title,
    name
  }

  const findIdSection = await Section.findOne({ id_section: id_section });
  const findHref = await Section.findOne({ href: href });
  const findName = await Section.findOne({ name: name });
  const findTitle = await Section.findOne({ title: title });


  if (!id_section || !href || !name || !title) {
    res.status(422).json({ error: 'é obrigatório o preenchimento de todos os dados!' })
    return
  }

  else if (findIdSection) {
    res.status(422).json({ error: 'ID já cadastrado!' });
    return
  }
  else if (findHref) {
    res.status(422).json({ error: 'Este nome de section já existe!' })
    return
  }
  else if (findName) {
    res.status(422).json({ error: 'Este nome de section_name já existe!' })
    return
  }
  else if (findTitle) {
    res.status(422).json({ error: 'Este titulo de section já existe!' })
    return
  }

  try {
    await Section.create(section);
    res.status(201).json({ message: 'Section criada com sucesso!' })
  }
  catch (err) {
    res.status(500).json({ error: err })
  }
})

module.exports = router
